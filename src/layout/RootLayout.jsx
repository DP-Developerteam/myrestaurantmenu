// Import libs
import { Outlet } from 'react-router-dom';
// Import utils
import ScrollToTopAuto from '../utils/ScrollToTopAuto';
import ScrollToTopButton from '../utils/ScrollToTopButton';
// Import components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function RootLayout() {

    return (
        <div className='dp-wrapper'>
            <ScrollToTopAuto />
            <ScrollToTopButton />
            <Header />
            <div className='dp-content'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout