// Import styles and libraries
import '../../styles/com-la.chat-badge.scss';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
// Import hooks
import { useStyler } from './style';
import { useIntents } from './intents';
// Import component
import LeadForm from './LeadForm';
// Import generators
import { paraphraseRuleBased, paraphraseGemini } from "./generators/index.js";
// Import ...
import { getTopMatches } from './retrieval';
import { checkSpam } from './antibot';
// import { saveConversation, exportConversations } from './store';
import { saveConversation } from './store';
import { logEvent } from "./analytics";

export default function ChatPanel({ onClose }) {
    // States for translations
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'en';

    // State for FAQ
    const [faq, setFaq] = useState([]);
    // Fetch FAQ
    useEffect(() => {
        fetch(`/faq/faq.${lang}.json`)
        .then((res) => res.json())
        .then((data) => setFaq(data))
        .catch(() => {
            // fallback in english
            fetch('/faq/faq.en.json')
            .then((res) => res.json())
            .then((data) => setFaq(data));
        });
    }, [lang]);

    // Declare hooks for conversations
    const { toConversational } = useStyler();
    const { detectIntent, getIntentReply } = useIntents();

    // States for messages and inputs
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // State to ref last message
    const messagesEndRef = useRef(null);
    // State to ref input focus
    const inputRef = useRef(null);

    // State for lead form
    const [isLeadForm, setIsLeadForm] = useState(false);

    // Auto-scroll when messages change or typing
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping, isLeadForm]);

    // Storage chat when panel is closed
    useEffect(() => {
        return () => {
            if (messages.length > 0) {
                    saveConversation(messages);
                }
            };
    }, [messages]);

    // function to focus input
    function focusInputCaretEnd() {
        const el = inputRef.current;
        if (!el) return;
        // Esperar al siguiente frame asegura que el DOM ya refleja disabled=false
        requestAnimationFrame(() => {
            el.focus();
            // colocar el cursor al final (UX más natural)
            const len = el.value?.length ?? 0;
            el.setSelectionRange?.(len, len);
        });
    }

    // Al abrir el ChatPanel (montaje)
    useEffect(() => {
        focusInputCaretEnd();
    }, []);
    // Cuando el bot termina o se cierra el LeadForm, vuelve el foco
    useEffect(() => {
        if (!isTyping && !isLeadForm) {
            focusInputCaretEnd();
        }
    }, [isTyping, isLeadForm]);

    // Handle send
    async function handleSend() {
        if (!input.trim()) return;

        // implement antispam/bots
        const spamCheck = checkSpam(input);
        if (!spamCheck.ok) {
            // Logs for analytics
            logEvent("spam_blocked", { message: input });
            const botReply = {
                role: 'bot',
                text: t('chatbot.suspicious')
            };
            setMessages([...messages, { role: 'user', text: input }, botReply]);
            setInput('');
            return;
        }

        // declare user message
        const userMsg = { role: 'user', text: input };
        // Logs for analytics
        logEvent("message_sent", { text: input });
        // add user message
        setMessages((prev) => [...prev, userMsg]);
        // Clear input
        setInput("");
        // Set bot's typing
        setIsTyping(true);

        // build newMessages
        let newMessages = [...messages, userMsg];

        // Check for intent first
        const { intent } = detectIntent(input);
        const intentReply = getIntentReply(intent);
        if (intentReply) {
            // Logs for analytics
            logEvent("intent_detected", { intent });

            // staged fake typing
            setTimeout(() => {
                setIsTyping(true);
                setTimeout(() => {
                    newMessages = [...newMessages, { role: 'bot', text: intentReply }];
                    if (intent === "support") {
                        logEvent("lead_intent", { text: input });
                        setIsLeadForm(true);
                    }
                    setMessages(newMessages);
                    setIsTyping(false);
                }, 1200); // how long bot "types"
            }, 400); // delay before bot "starts typing"
            setInput('');
            return;
        }

        // find best FAQ match
        const matches = getTopMatches(input, faq, 1);
        let botReply = { role: 'bot', text: 'Sorry, I didn’t understand your question.' };
        // Try FAQ match
        if (matches.length > 0) {
            // Logs for analytics
            logEvent("faq_hit", { faqId: matches[0].id, score: matches[0].score });
            botReply = {
                role: 'bot',
                text: toConversational(matches[0].a, matches[0].id)
            };
        } else {
        // Try Gemini fallback
            try {
                const geminiText = await paraphraseGemini(input);
                botReply = { role: 'bot', text: geminiText };
            } catch (e) {
                console.error("Gemini fallback failed:", e);
                botReply = { role: 'bot', text: await paraphraseRuleBased(input) };
            }
        }
        setIsTyping(true);
        setTimeout(() => {
            newMessages = [...newMessages, botReply];
            setMessages(newMessages);
            setIsTyping(false);
        }, 1000); // 1s de delay
    }

    const renderChatBox = () => {
        return (
            <>
                <header className='chatbox-header'>
                    <h4 className='font-larger'>{t('chatbot.header')}</h4>
                    <button onClick={onClose} aria-label='Close chat' className='chatbox-close font-small font-red font-bold'>✖</button>
                </header>
                <main className='chatbox-messages'>
                    {messages.map((msg, i) => (
                        <div key={i} className={`message ${msg.role === "user" ? "user" : "bot"}`} >
                            {/* <strong>{msg.role === 'user' ? 'You: ' : 'Bot: '}</strong> */}
                            {msg.text}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message bot typing">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    )}
                    {isLeadForm && (
                        <LeadForm
                            onSubmit={(lead) => {
                                setMessages(
                                    [
                                        ...messages,
                                        {
                                            role: "bot",
                                            text: `✅ Lead captured: ${lead.name || "N/A"} (${lead.email || lead.phone})`
                                        }
                                    ]
                                );
                                setIsLeadForm(false);
                            }}
                            onCancel={() => setIsLeadForm(false)}
                        />
                    )}
                    <div ref={messagesEndRef} />
                </main>
                <footer className='chatbox-footer'>
                    <input
                        ref={inputRef}
                        type='text'
                        placeholder={t('chatbot.placeholder')}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        disabled={isLeadForm || isTyping}
                    />
                    <button onClick={handleSend} disabled={isLeadForm} >{t('chatbot.send')}</button>
                    {/* <button onClick={exportConversations}>{t('chatbot.export')}</button> */}
                </footer>
            </>
        )
    }


    return renderChatBox();
}
