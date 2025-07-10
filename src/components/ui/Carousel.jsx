// Import styles and libraries
import '../../styles/com-ui.carousel.scss';
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Carousel = ({ slides, autoSlideInterval = 10000 }) => {
    // States for translations
    const { t } = useTranslation();

    // States for slide index
    const [currentIndex, setCurrentIndex] = useState(0);
    // State for current slide
    const currentSlide = slides[currentIndex];

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, autoSlideInterval);

        return () => clearInterval(interval);
    }, [slides.length, autoSlideInterval]);

    // Manual navigation
    const goToSlide = (index) => setCurrentIndex(index);

    // Render text in the image
    const renderText = () => {
        return (
            <>
                {currentSlide.text && currentSlide.link && (
                    <NavLink className="carousel-text carousel-link" to={currentSlide.link}>
                        {currentSlide.text}
                        <p>{t('carousel.cta')}</p>
                    </NavLink>
                )}
                {currentSlide.text && !currentSlide.link && (
                    <p className="carousel-text">
                        {currentSlide.text}
                    </p>
                )}
            </>
        )
    }

    // Render carousel navigation dots
    const renderNavigationDots = () => {
        return (
            <>
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className="carousel">
            <img src={currentSlide.image} alt={currentSlide.alt} className="carousel-image" />
            {renderText()}
            {renderNavigationDots()}
        </div>
    );
};

export default Carousel;