// Import styles and libraries
import '../../styles/com-la.chat-badge.scss';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
// Import hooks
import { useStyler } from './style';
import { useIntents } from './intents';
// Import forms
import LeadForm from './forms/LeadForm';
import TrialForm from './forms/TrialForm';
import RegisterForm from './forms/RegisterForm';
import IssueForm from './forms/IssueForm';
// Import generators
import { paraphraseRuleBased, paraphraseGemini } from "./generators/index.js";
// Import retrieval + helpers
import { getTopMatches } from './retrieval';
import { checkSpam } from './antibot';
import { saveConversation } from './store';
import { logEvent } from "./analytics";


// Declare forms
const FORM_REGISTRY = {
    lead: LeadForm,
    trial: TrialForm,
    register: RegisterForm,
    issue: IssueForm,
};

// Declare options
const DEFAULT_OPTIONS = [
    { label: "Start free trial", formId: "trial" },
    { label: "Create account", formId: "lead" },
    { label: "Report an issue", formId: "lead" },
];


export default function ChatPanel({ onClose, initialForm = null, initialPrefill = {}, openWithOptions = false, initialFormToken = 0 }) {
    // Translations
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'en';

    // Hooks
    const { toConversational } = useStyler();
    const { detectIntent, getIntentReply } = useIntents();

    // State
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);
    const inputRef = useRef(null);

    const [faq, setFaq] = useState([]);

    const [activeForm, setActiveForm] = useState(initialForm);
    const [activePrefill, setActivePrefill] = useState(initialPrefill || {});
    const optionsInjectedRef = useRef(false);

    // Touch detection to avoid forcing focus/scroll on mobile
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    useEffect(() => {
        const touch = (typeof window !== 'undefined') && (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
        setIsTouchDevice(!!touch);
    }, []);

    // React to parent triggers (initialForm + token)
    useEffect(() => {
        if (initialForm && initialForm !== activeForm) {
            openFormAction({ formId: initialForm, prefill: initialPrefill || {} });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialForm, initialFormToken]);

    // Reset options-injected state if localStorage cleared
    useEffect(() => {
        const seen = localStorage.getItem("chatbot_options_seen") === "true";
        if (!seen) optionsInjectedRef.current = false;
    }, []);

    // Fetch FAQ for current language
    useEffect(() => {
        fetch(`/faq/faq.${lang}.json`)
            .then((res) => res.json())
            .then((data) => setFaq(data))
            .catch(() => {
                fetch('/faq/faq.en.json')
                    .then((res) => res.json())
                    .then((data) => setFaq(data));
            });
    }, [lang]);

    // Auto-scroll to last message when messages/isTyping/activeForm change
    useEffect(() => {
        const el = messagesContainerRef.current;
        if (!el) return;

        // Avoid auto-scrolling while user actively typing on touch devices
        if (isTouchDevice && document.activeElement === inputRef.current) return;

        const scrollToBottom = () => {
            try {
                el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
            } catch {
                el.scrollTop = el.scrollHeight;
            }
            try {
                if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
            } catch (err) { console.debug('scrollIntoView failed', err); }
        };

        scrollToBottom();
        requestAnimationFrame(() => scrollToBottom());
        requestAnimationFrame(() => requestAnimationFrame(() => scrollToBottom()));
        const timer = setTimeout(() => scrollToBottom(), 150);

        const imgs = Array.from(el.querySelectorAll('img'));
        const onImgLoad = () => scrollToBottom();
        imgs.forEach(img => img.addEventListener('load', onImgLoad));

        return () => {
            clearTimeout(timer);
            imgs.forEach(img => img.removeEventListener('load', onImgLoad));
        };
    }, [messages, isTyping, activeForm, isTouchDevice]);

    // Persist conversation on unmount
    useEffect(() => {
        return () => {
            if (messages.length > 0) saveConversation(messages);
        };
    }, [messages]);

    // Show greeting/options when opened from badge
    useEffect(() => {
        if (!activeForm && messages.length === 0) {
            const greeting = getIntentReply("greeting") || "Hello! 👋";
            const newMessages = [{ role: "bot", text: greeting }];

            if (openWithOptions) {
                optionsInjectedRef.current = true;
                localStorage.setItem("chatbot_options_seen", "true");
                newMessages.push({ role: "bot", type: "options", options: DEFAULT_OPTIONS });
            }
            setMessages(newMessages);
        }
    }, [openWithOptions, activeForm, messages, getIntentReply]);

    // Focus helpers
    const focusInputCaretEnd = useCallback(() => {
        const el = inputRef.current;
        if (!el) return;
        if (isTouchDevice) return;
        requestAnimationFrame(() => {
            try { el.focus({ preventScroll: true }); } catch { el.focus(); }
            const len = el.value?.length ?? 0;
            el.setSelectionRange?.(len, len);
        });
    }, [isTouchDevice]);

    useEffect(() => { focusInputCaretEnd(); }, [focusInputCaretEnd]);
    useEffect(() => { if (!isTyping && activeForm === null) focusInputCaretEnd(); }, [isTyping, activeForm, focusInputCaretEnd]);

    // Actions
    function openFormAction({ formId, prefill = {} }) {
        setActiveForm(formId);
        setActivePrefill(prefill);
    }
    function pushBotText(text) { setMessages((prev) => [...prev, { role: "bot", text }]); }
    function pushOptions(options) { setMessages((prev) => [...prev, { role: "bot", type: "options", options }]); }

    async function runFlow(steps = []) {
        setIsTyping(true);
        for (const step of steps) {
            if (step.type === "delay") { await new Promise(r => setTimeout(r, step.ms ?? 600)); continue; }
            if (step.type === "text") { await new Promise(r => setTimeout(r, 400)); pushBotText(step.text); continue; }
            if (step.type === "options") { await new Promise(r => setTimeout(r, 400)); pushOptions(step.options); continue; }
            if (step.type === "action") { if (step.action === "openForm") openFormAction(step.payload || {}); continue; }
        }
        setIsTyping(false);
    }

    // Handle send
    async function handleSend() {
        if (!input.trim()) return;

        const spamCheck = checkSpam(input);
        if (!spamCheck.ok) {
            logEvent('spam_blocked', { message: input });
            setMessages(prev => [...prev, { role: 'user', text: input }, { role: 'bot', text: t('chatbot.suspicious') }]);
            setInput('');
            return;
        }

        const userMsg = { role: 'user', text: input };
        logEvent('message_sent', { text: input });
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        const newMessages = [...messages, userMsg];

        const { intent } = detectIntent(input);
        const intentReply = getIntentReply(intent);
        if (intentReply) {
            logEvent('intent_detected', { intent });
            const flows = {
                support: [ { type: 'text', text: intentReply }, { type: 'delay', ms: 300 }, { type: 'action', action: 'openForm', payload: { formId: 'lead' } } ],
                start: [ { type: 'text', text: intentReply }, { type: 'options', options: DEFAULT_OPTIONS } ],
                default: [ { type: 'text', text: intentReply } ]
            };

            setTimeout(() => { runFlow(flows[intent] || flows.default); }, 400);
            return;
        }

        const matches = getTopMatches(input, faq, 1);
        let botReply = null;
        if (matches.length > 0) {
            logEvent('faq_hit', { faqId: matches[0].id, score: matches[0].score });
            botReply = { role: 'bot', text: toConversational(matches[0].a, matches[0].id) };
        } else {
            try {
                const lastTwo = messages.filter(m => m.role !== 'system').slice(-4);
                const geminiText = await paraphraseGemini(input, lastTwo);
                botReply = { role: 'bot', text: geminiText };
            } catch (e) {
                console.error('Gemini fallback failed:', e);
                botReply = { role: 'bot', text: await paraphraseRuleBased(input) };
            }
        }

        if (botReply?.text) {
            setTimeout(() => { const newMessages2 = [...newMessages, botReply]; setMessages(newMessages2); setIsTyping(false); }, 1000);
        } else {
            runFlow([ { type: 'text', text: t('chatbot.didntUnderstand') || "I didn’t quite get that." }, { type: 'options', options: DEFAULT_OPTIONS } ]);
        }
    }

    const renderChatBox = () => {
        return (
            <>
                <header className='chatbox-header'>
                    <h4 className='font-larger'>{t('chatbot.header')}</h4>
                    <button onClick={onClose} aria-label='Close chat' className='chatbox-close font-small font-red font-bold'>✖</button>
                </header>
                <main className='chatbox-messages' ref={messagesContainerRef}>
                    {messages.map((msg, i) => (
                        <div key={i} className={`message ${msg.role}`}>
                            {msg.type === "options" ? (
                                <div className="chat-options">
                                    {msg.options.map((opt, j) => (
                                        <button key={j} className="chat-option" onClick={() => openFormAction({ formId: opt.formId })}>{opt.label}</button>
                                    ))}
                                </div>
                            ) : (
                                msg.text
                            )}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message bot typing">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    )}
                    {activeForm && (() => {
                        const Form = FORM_REGISTRY[activeForm];
                        logEvent("form_opened", { formId: activeForm });
                        return (
                            <Form
                                prefill={activePrefill}
                                onSubmit={(data) => {
                                    logEvent("form_submitted", { formId: activeForm, data });
                                    setMessages(prev => [...prev, { role: "bot", text: `✅ ${activeForm} form submitted: ${JSON.stringify(data)}` }]);
                                    setActiveForm(null);
                                    setActivePrefill({});
                                }}
                                onCancel={() => {
                                    logEvent("form_cancelled", { formId: activeForm });
                                    setActiveForm(null);
                                    setActivePrefill({});
                                }}
                            />
                        );
                    })()}

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
                        disabled={activeForm !== null || isTyping}
                    />
                    <button onClick={handleSend} disabled={activeForm !== null} >{t('chatbot.send')}</button>
                </footer>
            </>
        )
    }

    return renderChatBox();
}
