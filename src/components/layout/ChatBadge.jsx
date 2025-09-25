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
    // State for touch devices
    const [isTouch, setIsTouch] = useState(false);

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

    // // Adjust chatbox position for mobile keyboard
    // useEffect(() => {
    //     if (!open) return;

    //     const viewport = window.visualViewport;
    //     if (!viewport) return;

    //     function adjustForKeyboard() {
    //         const chatbox = document.querySelector(".chatbox");
    //         if (!chatbox) return;

    //         // Base offset from CSS (90px mobile, 130px desktop)
    //         const cssBottom = window.innerWidth >= 650 ? 130 : 90;
    //         // Extra offset when keyboard is open
    //         const keyboardOffset = window.innerHeight - viewport.height - viewport.offsetTop;
    //         // Respect CSS bottom as minimum
    //         const finalBottom = Math.max(cssBottom, keyboardOffset);

    //         chatbox.style.bottom = `${finalBottom}px`;
    //     }

    //     viewport.addEventListener("resize", adjustForKeyboard);
    //     viewport.addEventListener("scroll", adjustForKeyboard);

    //     // run once when opened
    //     adjustForKeyboard();

    //     return () => {
    //         viewport.removeEventListener("resize", adjustForKeyboard);
    //         viewport.removeEventListener("scroll", adjustForKeyboard);
    //         const chatbox = document.querySelector(".chatbox");
    //         // reset
    //         if (chatbox) chatbox.style.bottom = "";
    //     };
    // }, [open]);

    // Detect if it is touch device
    useEffect(() => {
        const touch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        setIsTouch(touch);
    }, []);

    useEffect(() => {
        // Throttled setter to avoid jank on rapid resize
        let raf = null;
        const setVH = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const h = (window.visualViewport?.height || window.innerHeight) * 0.01;
                document.documentElement.style.setProperty('--vh', `${h}px`);
            });
        };
        setVH();
        window.addEventListener('resize', setVH);
        window.visualViewport?.addEventListener('resize', setVH);
        // Some Androids fire 'scroll' on keyboard, this keeps it stable
        window.visualViewport?.addEventListener('scroll', setVH);
        return () => {
            window.removeEventListener('resize', setVH);
            window.visualViewport?.removeEventListener('resize', setVH);
            window.visualViewport?.removeEventListener('scroll', setVH);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);


    // Render chat box
    const renderChatBox = () => {
        return (
            <div className='chat-overlay'>
                <div className='chat-overlay-bg' onClick={() => setIsOpen(false)}></div>
                <div className={`chatbox ${isTouch ? 'chatbox--touch' : 'chatbox--desktop'}`}>
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