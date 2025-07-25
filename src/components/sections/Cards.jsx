// Import styles and libraries
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
// Import hooks
import useMediaQuery from '../../hooks/useMediaQuery';
import useGsapHorizontalScroll from '../../hooks/useGsapHorizontalScroll';
// Import components
import Card from '../ui/Card';


const Cards = ({ text, cardsData, cssClass = '' }) => {
    // States for translations
    const { t } = useTranslation();

    // State for card active
    const [openId, setOpenId] = useState(null);

    // Declare state for responsive design using custom hook
    const isDesktop = useMediaQuery('(min-width: 786px)');

    // Declare scroll horizontal hook
    const scrollHorizontalHook = useGsapHorizontalScroll({
        extraScrollAmount: 80,
        wrapperSelector: '.cards-scroll-wrapper',
        startTrigger: 'top 25%',
        contentLength: cssClass === '' ? cssClass.length : 0, // Disable if cssClass exists
        enabled: cssClass === '' // Pass a flag to disable internally
    });

    // Create a fallback ref in case we don't use horizontal scroll
    const fallbackRef = useRef(null);

    // Use the hook's ref if no cssClass, otherwise use fallbackRef
    const sectionRef = cssClass === '' && isDesktop ? scrollHorizontalHook.sectionRef : fallbackRef;
    const isCentered = cssClass === '' && isDesktop ? scrollHorizontalHook.isCentered : false;


    return (
        <section
            className={`section section-cards ${isCentered ? 'centered-cards' : ''} ${cssClass} ${cssClass === '' && !isDesktop ? 'scroll-active' : ''}`}
            ref={sectionRef}
        >
            {text &&
                <div className='text-container'>
                    <h3 className='title-text'>{t(text.title)}</h3>
                    <p className='description-text'>{t(text.description)}</p>
                </div>
            }
            <div className="cards-scroll-wrapper">
                {cardsData.map((card) => (
                    <Card
                        key={card.id}
                        {...card}
                        currentOpenId={openId}
                        setOpenId={setOpenId}
                    />
                ))}
            </div>
        </section>
    );
};

export default Cards;