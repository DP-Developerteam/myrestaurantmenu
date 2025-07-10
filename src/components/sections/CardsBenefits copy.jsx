// Import styles and libraries
import { useState } from 'react';
// import { useState, useEffect, useRef, useLayoutEffect } from 'react';
// Import hooks
import useGsapHorizontalScroll from '../../hooks/useGsapHorizontalScroll';
// Import components
import Card from '../ui/Card';
// Import icons & images
import SliderHero01 from '../../assets/img/qr-code.webp';


const CardsBenefits = () => {
    // State for card active
    const [openId, setOpenId] = useState(null);

    // Declare cards content
    const cardsData = [
        {
            id: 1,
            isOnClick: true,
            text: 'Flip card',
            image: SliderHero01,
            description: 'Este es un texto de descripción que aparece al hacer clic.',
        },
        {
            id: 2,
            isOnClick: true,
            text: 'Expand card',
            image: SliderHero01,
            description: 'Este es un texto de descripción que aparece al hacer clic.',
        },
        {
            id: 3,
            isOnClick: true,
            text: 'Static card 1',
            image: SliderHero01,
            description: 'Description'
        },
        {
            id: 4,
            isOnClick: true,
            text: 'Static card 2',
            image: SliderHero01,
        },
        {
            id: 5,
            isOnClick: true,
            text: 'Static card 3',
            image: SliderHero01,
        },
        {
            id: 6,
            isOnClick: true,
            text: 'Static card 4',
            image: SliderHero01,
        },
        {
            id: 7,
            cssClass: 'card-red',
            isOnClick: true,
            text: 'Static card RED',
            image: SliderHero01,
            description: 'Description'
        },
    ];

    // Use smart hook that handles ScrollTrigger
    const { sectionRef, isCentered } = useGsapHorizontalScroll({
        extraScrollAmount: 80,
        wrapperSelector: '.cards-scroll-wrapper',
        startTrigger: 'top 25%',
        contentLength: cardsData.length
    });


    return (
        <section
            className={`section section-cards ${isCentered ? 'centered-cards' : ''}`}
            ref={sectionRef}
        >
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

export default CardsBenefits;