// Import libs
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// Import custom hooks
import { useScrollToTop } from "../hooks/useScrollToTop";
// Import components
import ScrollTopButton from '../components/layout/ScrollTopButton';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatBadge from '../components/layout/ChatBadge';

function RootLayout() {

    // State to manage chat badge
    const [isChatOpen, setIsChatOpen] = useState(false);

    // Call custom hook for auto-scroll to top on navigation
    useScrollToTop();


    return (
        <div className='dp-wrapper'>
            <ScrollTopButton />
            <Header />
            <ChatBadge isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
            <div className='dp-content'>
                <Outlet context={{ setIsChatOpen }} />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout