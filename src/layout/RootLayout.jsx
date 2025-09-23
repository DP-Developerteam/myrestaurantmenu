// Import libs
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// Import utils
import ScrollToTopAuto from '../utils/ScrollToTopAuto';
import ScrollToTopButton from '../utils/ScrollToTopButton';
// Import components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatBadge from '../components/layout/ChatBadge';

function RootLayout() {

    // State to manage chat badge
    const [isChatOpen, setIsChatOpen] = useState(false);


    return (
        <div className='dp-wrapper'>
            <ScrollToTopAuto />
            <ScrollToTopButton />
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