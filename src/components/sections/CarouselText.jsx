import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './../../styles/com-se.carousel-text.scss';

const CarouselText = ({ content, title, cssClass, autoScrollInterval = 4000 }) => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll functionality
    useEffect(() => {
        if (!content || content.length <= 1 || isHovered) return;

        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % content.length);
        }, autoScrollInterval);

        return () => clearInterval(interval);
    }, [content, autoScrollInterval, isHovered]);

    // Get indices for left, center, and right content
    const getContentIndex = () => {
        if (!content || content.length === 0) return { left: 0, center: 0, right: 0 };

        const length = content.length;
        const left = (activeIndex - 1 + length) % length;
        const center = activeIndex;
        const right = (activeIndex + 1) % length;

        return { left, center, right };
    };

    // Handle navigation
    const handleNavigation = (index) => {
        setActiveIndex(index);
    };

    // Render content bullets
    const renderBullets = (contentData) => {
        return (
            <ul className='bullets-container'>
                {Object.entries(contentData.content).map(([key, bullet]) => (
                    <li className='bullet' key={key}>
                        <span className='icon'>•</span> {t(bullet)}
                    </li>
                ))}
            </ul>
        );
    };

    // Render single content item
    const renderContentItem = (contentData, position, index) => {
        return (
            <div
                className={`carousel-content-item ${position}`}
                onClick={() => position !== 'center' && handleNavigation(index)}
            >
                <div className='content-wrapper'>
                    <h4 className='content-title'>{t(contentData.title)}</h4>
                    {renderBullets(contentData)}
                </div>
            </div>
        );
    };

    // Render navigation dots
    const renderDots = () => {
        if (!content || content.length <= 1) return null;

        return (
            <div className='carousel-dots'>
                {content.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleNavigation(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        );
    };

    if (!content || content.length === 0) {
        return (
            <section className={`section section-carousel-text ${cssClass || ''}`}>
                <div className='no-content'>
                    <p>{t('No content available')}</p>
                </div>
            </section>
        );
    }

    const { left, center, right } = getContentIndex();

    return (
        <section
            className={`section section-carousel-text ${cssClass || ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {title && <h3 className='section-title'>{t(title)}</h3>}

            <div className='carousel-container'>
                <div className='carousel-content'>
                    {content.length > 1 && renderContentItem(content[left], 'left', left)}
                    {renderContentItem(content[center], 'center', center)}
                    {content.length > 1 && renderContentItem(content[right], 'right', right)}
                </div>
                {renderDots()}
            </div>
        </section>
    );
};

export default CarouselText;