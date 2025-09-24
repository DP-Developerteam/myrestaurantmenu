// Import styles and libraries
import '../../styles/com-la.chat-badge.scss';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
// Import components
import ChatPanel from '../chatbot/ChatPanel.jsx';
import TermsModal from '../chatbot/TermsModal.jsx';
// Images and icons
import ImgChatBadge from '../../assets/img/chat-badge.webp';


const ChatBadge = ({isOpen, setIsOpen}) => {
    // State to open chat
    const [internalOpen, setInternalOpen] = useState(false);
    const open = isOpen !== undefined ? isOpen : internalOpen;
    const toggleOpen = setIsOpen || setInternalOpen;
    // State to accept terms
    const [accepted, setAccepted] = useState(false)
    // const [accepted, setAccepted] = useState(
    //     () => localStorage.getItem("chatbot_terms") === "true"
    // );

    // Lock/unlock background scroll
    useEffect(() => {
        if (open) {
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
    }, [open]);

    // Render chat box
    const renderChatBox = () => {
        return (
            <div className='chat-overlay'>
                <div className='chat-overlay-bg' onClick={() => setIsOpen(false)}></div>
                <div className='chatbox'>
                    { !accepted
                        ?
                            <TermsModal onAccept={() => { localStorage.setItem("chatbot_terms", "true"); setAccepted(true); }} onDecline={() => toggleOpen(false)} />
                        :
                            <ChatPanel onClose={() => toggleOpen(false)} />
                    }
                </div>
            </div>
        )
    }

    return (
        <>
            <button className='chat-badge' aria-label='Open chat support' onClick={() => toggleOpen(!open)}>
                <img src={ImgChatBadge} alt='' aria-hidden='true' />
            </button>
            {open && createPortal(renderChatBox(), document.body)}
        </>
    )
}

export default ChatBadge