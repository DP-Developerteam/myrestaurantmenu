import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './../../styles/com-se.carousel-text.scss';
import useDragToSlide from '../../hooks/useDragToSlide'; // ADDED

const CarouselText = ({ content, title, cssClass, autoScrollInterval = 4000 }) => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Drag-to-slide hook setup // ADDED
    const { bind: dragBind, offset, isDragging } = useDragToSlide({ // ADDED
        axis: 'x', // ADDED
        fractionOfSize: 0.2, // ADDED
        onCommit: (dir) => { // ADDED
            setActiveIndex(prev => { // ADDED
                const len = content?.length ?? 0; // ADDED
                if (!len) return prev; // ADDED
                return (prev + (dir === 'next' ? 1 : -1) + len) % len; // ADDED
            }); // ADDED
        }, // ADDED
        onCancel: () => {}, // ADDED
    }); // ADDED

    // Pause auto-scroll while actively dragging // ADDED
    useEffect(() => { // ADDED
        if (isDragging) setIsHovered(true); else setIsHovered(false); // ADDED
    }, [isDragging]); // ADDED

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
            // <div
            //     className={`carousel-content-item ${position}`}
            //     onClick={() => position !== 'center' && handleNavigation(index)}
            // >
            <div
                className={`carousel-content-item ${position} ${position === 'center' ? 'fade-in-on-mount' : ''}`}
                onClick={() => position !== 'center' && handleNavigation(index)}
                key={`${position}-${index}`}
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

    // Edge case: no content
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
                {/* // <div className='carousel-content'> // commented out to add drag bindings // ADDED */}
                <div className='carousel-content' {...dragBind} style={{ transform: `translateX(${offset}px)` }}> {/* ADDED */}
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