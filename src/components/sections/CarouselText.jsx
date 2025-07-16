// // Import styles and libraries
// import '../../styles/com-se.carousel-text.scss';
// import { useState, useEffect, useRef } from 'react';
// import { useTranslation } from 'react-i18next';

// const CarouselText = ({ content, title, cssClass, autoScrollInterval = 2000 }) => {
//     // States for translations
//     const { t } = useTranslation();

//     // State to track which content is currently active (index-based)
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [isHovered, setIsHovered] = useState(false);
//     const intervalRef = useRef(null);

//     // Auto-scroll functionality
//     useEffect(() => {
//         if (!content || content.length <= 1) return;

//         // Clear any existing interval
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//             intervalRef.current = null;
//         }

//         // Only start interval if not hovered
//         if (!isHovered) {
//             intervalRef.current = setInterval(() => {
//                 setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
//             }, autoScrollInterval);
//         }

//         // Cleanup function
//         return () => {
//             if (intervalRef.current) {
//                 clearInterval(intervalRef.current);
//                 intervalRef.current = null;
//             }
//         };
//     }, [content, autoScrollInterval, isHovered]);

//     // Function to handle content click
//     const handleContentClick = (index) => {
//         setActiveIndex(index);
//     };

//     // Function to get the index with infinite loop logic
//     const getLoopedIndex = (index, length) => {
//         if (index < 0) return length - 1;
//         if (index >= length) return 0;
//         return index;
//     };

//     // Get indices for left, center, and right content
//     const getContentIndices = () => {
//         if (!content || content.length === 0) return { left: 0, center: 0, right: 0 };

//         const length = content.length;
//         const center = activeIndex;
//         const left = getLoopedIndex(activeIndex - 1, length);
//         const right = getLoopedIndex(activeIndex + 1, length);

//         return { left, center, right };
//     };

//     // Handle mouse enter/leave for auto-scroll pause
//     const handleMouseEnter = () => setIsHovered(true);
//     const handleMouseLeave = () => setIsHovered(false);

//     // Render content bullets
//     const renderBullets = (contentData) => {
//         if (!contentData || !contentData.content) return null;

//         return (
//             <ul className='bullets-container'>
//                 {Object.entries(contentData.content).map(([key, bullet]) => (
//                     <li className='bullet' key={key}>
//                         <span className='icon'>•</span> {t(bullet)}
//                     </li>
//                 ))}
//             </ul>
//         );
//     };

//     // Render single content item
//     const renderContentItem = (contentData, position, index) => {
//         if (!contentData) return null;

//         return (
//             <div
//                 className={`carousel-content-item ${position}`}
//                 onClick={() => position !== 'center' && handleContentClick(index)}
//                 style={{ cursor: position !== 'center' ? 'pointer' : 'default' }}
//             >
//                 <h4 className='content-title'>{t(contentData.title)}</h4>
//                 {renderBullets(contentData)}
//             </div>
//         );
//     };

//     // Render navigation dots
//     const renderDots = () => {
//         if (!content || content.length <= 1) return null;

//         return (
//             <div className='carousel-dots'>
//                 {content.map((_, index) => (
//                     <button
//                         key={index}
//                         className={`dot ${activeIndex === index ? 'active' : ''}`}
//                         onClick={() => handleContentClick(index)}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>
//         );
//     };

//     // Early return if no content
//     if (!content || content.length === 0) {
//         return (
//             <section className={`section section-carousel-text ${cssClass || ''}`}>
//                 <div className='no-content'>
//                     <p>{t('No content available')}</p>
//                 </div>
//             </section>
//         );
//     }

//     const { left, center, right } = getContentIndices();

//     return (
//         <section
//             className={`section section-carousel-text ${cssClass || ''}`}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             {title && <h3 className='section-title'>{t(title)}</h3>}

//             <div className='carousel-container'>
//                 <div className='carousel-content'>
//                     {content.length > 1 && renderContentItem(content[left], 'left', left)}
//                     {renderContentItem(content[center], 'center', center)}
//                     {content.length > 1 && renderContentItem(content[right], 'right', right)}
//                 </div>

//                 {renderDots()}
//             </div>
//         </section>
//     );
// };

// export default CarouselText;


// Import styles and libraries
import '../../styles/com-se.carousel-text.scss';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CarouselText = ({ content, title, cssClass, autoScrollInterval = 4000 }) => {
    // States for translations
    const { t } = useTranslation();

    // State to track which content is currently active (index-based)
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);
    const containerRef = useRef(null);
    const animationInitialized = useRef(false);

    // Initialize GSAP animations
    useEffect(() => {
        if (!animationInitialized.current && containerRef.current) {
            initializeAnimations();
            animationInitialized.current = true;
        }
    }, []);

    // Auto-scroll functionality
    useEffect(() => {
        if (!content || content.length <= 1) return;

        // Clear any existing interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        // Only start interval if not hovered
        if (!isHovered) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % content.length;
                    animateTransition('next');
                    return newIndex;
                });
            }, autoScrollInterval);
        }

        // Cleanup function
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [content, autoScrollInterval, isHovered]);

    // Initialize GSAP animations
    const initializeAnimations = () => {
        const container = containerRef.current;
        if (!container) return;

        // Entrance animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        // Animate section title
        tl.fromTo(container.querySelector('.section-title'),
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out"
            }
        );

        // Animate carousel items
        tl.fromTo(container.querySelectorAll('.carousel-content-item'),
            {
                opacity: 0,
                y: 100,
                scale: 0.8,
                rotationY: 45
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                rotationY: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2
            },
            "-=0.4"
        );

        // Animate dots
        tl.fromTo(container.querySelectorAll('.carousel-dots .dot'),
            {
                opacity: 0,
                scale: 0
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                stagger: 0.1
            },
            "-=0.6"
        );

        // Animate bullets
        tl.fromTo(container.querySelectorAll('.bullets-container .bullet'),
            {
                opacity: 0,
                x: -30
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.05
            },
            "-=0.8"
        );

        // Setup continuous animations
        setupContinuousAnimations();
        setupHoverAnimations();
    };

    // Continuous floating animation for center item
    const setupContinuousAnimations = () => {
        const centerItem = containerRef.current?.querySelector('.carousel-content-item.center');

        if (centerItem) {
            gsap.to(centerItem, {
                y: -8,
                duration: 3,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });
        }
    };

    // Setup hover animations
    const setupHoverAnimations = () => {
        const items = containerRef.current?.querySelectorAll('.carousel-content-item.left, .carousel-content-item.right');

        items?.forEach(item => {
            const bullets = item.querySelectorAll('.bullet');

            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });

                gsap.to(bullets, {
                    x: 8,
                    duration: 0.3,
                    ease: "power2.out",
                    stagger: 0.02
                });
            });

            item.addEventListener('mouseleave', () => {
                const baseScale = item.classList.contains('left') || item.classList.contains('right') ? 0.9 : 1;
                gsap.to(item, {
                    scale: baseScale,
                    duration: 0.3,
                    ease: "power2.out"
                });

                gsap.to(bullets, {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out",
                    stagger: 0.02
                });
            });
        });
    };

    // Animate transitions
    const animateTransition = (direction = 'next') => {
        const items = containerRef.current?.querySelectorAll('.carousel-content-item');
        if (!items) return;

        const tl = gsap.timeline();

        // Animate items out
        tl.to(items, {
            scale: 0.7,
            opacity: 0.3,
            duration: 0.3,
            ease: "power2.in"
        });

        // Animate items back in
        tl.to(items, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1
        });

        // Add rotation effect
        tl.fromTo(containerRef.current?.querySelector('.carousel-content'),
            {
                rotationY: direction === 'next' ? 5 : -5
            },
            {
                rotationY: 0,
                duration: 0.6,
                ease: "power2.out"
            },
            "-=0.5"
        );
    };

    // Function to handle content click
    const handleContentClick = (index) => {
        if (index === activeIndex) return;

        const direction = index > activeIndex ? 'next' : 'prev';
        animateTransition(direction);
        setActiveIndex(index);
    };

    // Function to handle dot click
    const handleDotClick = (index) => {
        const dot = containerRef.current?.querySelectorAll('.carousel-dots .dot')[index];
        if (dot) {
            gsap.to(dot, {
                scale: 1.4,
                duration: 0.1,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
            });
        }
        handleContentClick(index);
    };

    // Function to get the index with infinite loop logic
    const getLoopedIndex = (index, length) => {
        if (index < 0) return length - 1;
        if (index >= length) return 0;
        return index;
    };

    // Get indices for left, center, and right content
    const getContentIndices = () => {
        if (!content || content.length === 0) return { left: 0, center: 0, right: 0 };

        const length = content.length;
        const center = activeIndex;
        const left = getLoopedIndex(activeIndex - 1, length);
        const right = getLoopedIndex(activeIndex + 1, length);

        return { left, center, right };
    };

    // Handle mouse enter/leave for auto-scroll pause
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Render content bullets
    const renderBullets = (contentData) => {
        if (!contentData || !contentData.content) return null;

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
        if (!contentData) return null;

        return (
            <div
                className={`carousel-content-item ${position}`}
                onClick={() => position !== 'center' && handleContentClick(index)}
                style={{ cursor: position !== 'center' ? 'pointer' : 'default' }}
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
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        );
    };

    // Early return if no content
    if (!content || content.length === 0) {
        return (
            <section className={`section section-carousel-text ${cssClass || ''}`} ref={containerRef}>
                <div className='no-content'>
                    <p>{t('No content available')}</p>
                </div>
            </section>
        );
    }

    const { left, center, right } = getContentIndices();

    return (
        <section
            className={`section section-carousel-text ${cssClass || ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
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