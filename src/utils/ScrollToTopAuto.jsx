//Import libraries
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ***************
// ScrollToTopAuto Component
// Automatically scrolls to the top of the page when the route changes
// ***************

const ScrollToTopAuto = () => {
  // Get the current route pathname
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to the top of the page whenever the pathname changes
        window.scrollTo(0, 0);
    }, [pathname]); // Dependency array: runs this effect when pathname changes
    // This component does not render anything visually
    return null;
}

export default ScrollToTopAuto