// Import styles and libraries
import '../../styles/com-la.chat-badge.scss';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
// Images and icons
import ImgChatBadge from '../../assets/img/chat-badge.webp';


const ChatBadge = ({isOpen, setIsOpen}) => {
    // // State to open chat
    // const [isOpen, setIsOpen] = useState(false);
    const [internalOpen, setInternalOpen] = useState(false);
    const open = isOpen !== undefined ? isOpen : internalOpen;
    const toggleOpen = setIsOpen || setInternalOpen;
    // State to accept terms
    const [accepted, setAccepted] = useState(false);
    // State to manage messages
    const [messages, setMessages] = useState([
        { from: "bot", text: "Welcome 👋! Before we start, please accept our Terms of Use." }
    ]);
    // State to manage inputs
    const [input, setInput] = useState("");
    // State to ref last message
    const messagesEndRef = useRef(null);

    // Set initial options
    const initialOptions = [
        "I need support",
        "I want to know more about pricing",
        "Talk to a human"
    ];

    // Lock/unlock background scroll
    useEffect(() => {
        if (isOpen) {
            const y = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${y}px`;
            document.body.style.width = '100%';
            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, y);
            };
        }
    }, [isOpen]);

    // Auto-scroll when messages change
    useEffect(() => {
        if (isOpen && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    // Handle send
    const handleSend = (text) => {
        if (!text.trim()) return;

        // Add user message
        setMessages((prev) => [...prev, { from: "user", text }]);
        setInput("");

        // Example bot response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: `You said: "${text}". Thanks!` }
            ]);
        }, 600);
    };
    // Handle key press
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend(input);
        } else if (e.key === "Escape") {
            e.preventDefault();
            setIsOpen(false);
        }
    };

    // Render terms modal
    const renderTermsModal = () => {
        return (
            <div className="chatbox-terms">
                <p>Please accept our <a href="/terms" className='font-bold font-red'>Terms of Use</a> to continue.</p>
                <button className='btn-solid-red btn-full-width' onClick={() => setAccepted(true)}>Accept</button>
                <button className='btn-solid-dark btn-full-width' onClick={() => setIsOpen(false)}>Decline</button>
            </div>
        )
    }

    // Render chat box
    const renderChatBox = () => {
        return (
            <div className="chat-overlay">
                <div className="chat-overlay-bg" onClick={() => setIsOpen(false)}></div>
                <div className="chatbox">
                    {!accepted ? renderTermsModal() : (
                        <>
                            <header className="chatbox-header">
                                <h4 className='font-larger'>Chat Support</h4>
                                <button className="chatbox-close font-small font-red font-bold" onClick={() => setIsOpen(false)} aria-label="Close chat" >X</button>
                            </header>
                            <div className="chatbox-messages">
                                {messages.map((msg, i) => (
                                    <div key={i} className={`message ${msg.from === "user" ? "user" : "bot"}`} >
                                        {msg.text}
                                    </div>
                                ))}
                                {messages.length === 1 && (
                                    <div className="chat-options">
                                        {initialOptions.map((opt, i) => (
                                            <button key={i} className="chat-option" onClick={() => handleSend(opt)} >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                            <footer className="chatbox-footer">
                                <input type="text" value={input} placeholder="Type your message..." onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyPress} />
                                <button onClick={() => handleSend(input)}>Send</button>
                            </footer>
                        </>
                    )}
                </div>
            </div>
        )
    }

    return (
        <>
            <button className="chat-badge" aria-label="Open chat support" onClick={() => toggleOpen(!open)}>
                <img src={ImgChatBadge} alt="" aria-hidden="true" />
            </button>
            {isOpen && createPortal(renderChatBox(), document.body)}
        </>
    )
}

export default ChatBadge