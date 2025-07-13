// Import styles and libraries
import '../../App.scss';
// Import components
import SectionHero from '../../components/sections/Hero';
import SectionCardsFeatures from '../../components/sections/CardsBenefits';
import TextImage from '../../components/sections/TextImage';
// Import icons & images
import SliderHero01 from '../../assets/img/qr-code.webp';

const Home = () => {

    const SectionCardsFeatures01 = {
        'cardsData': [
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
        ]
    };
    const SectionCardsFeatures02 = {
        'text': {
            'title': 'We work with companies like yours',
        },
        'cardsData': [
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
        ],
        'cssClass': 'section-red-4-cards'
    };
    const SectionTextImage01 = {
        'title': "My Component",
        'tabs': false,
        'tabsContent': [
            {
                bullets: {
                    '01': 'Display products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

                },
                buttons: {
                    first: {
                        content: 'Check the live demo now',
                        cssClass: 'btn-solid-light btn-inner-shadow',
                        to: 'demo'
                    },
                    second: {
                        content: 'Start trial for free',
                        cssClass: 'btn-solid-red',
                        to: 'promo'
                    }
                },
                image: {
                    src: SliderHero01,
                    alt: 'Description',
                    width: 300,
                    height: 300,
                }
            }
        ]
    };
    const SectionCardsFeatures03 = {
        'cardsData': [
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
        ]
    };
    const SectionTextImage02 = {
        'tabs': true,
        'tabsContent': [
            {
                title: 'Clients CMS',
                bullets: {
                    '01': 'Display products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

                },
                image: {
                    src: SliderHero01,
                    alt: 'Description',
                    width: 300,
                    height: 300,
                }
            },
            {
                title: 'Manager CMS',
                bullets: {
                    '01': 'MANAGER products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

                },
                image: {
                    src: SliderHero01,
                    alt: 'Description',
                    width: 300,
                    height: 300,
                }
            },
            {
                title: 'Customization',
                bullets: {
                    '01': 'Customization products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

                },
                image: {
                    src: SliderHero01,
                    alt: 'Description',
                    width: 300,
                    height: 300,
                }
            },
            {
                title: 'Syncronization',
                bullets: {
                    '01': 'Syncronization products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

                },
                image: {
                    src: SliderHero01,
                    alt: 'Description',
                    width: 300,
                    height: 300,
                }
            },
            {
                title: 'Push notifications',
                bullets: {
                    '01': 'Display products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

                },
                image: {
                    src: SliderHero01,
                    alt: 'Description',
                    width: 300,
                    height: 300,
                }
            }
        ]
    };

    return (
        <div className='page page-home'>
            <SectionHero />
            <SectionCardsFeatures cardsData={SectionCardsFeatures01.cardsData} />
            <SectionCardsFeatures text={SectionCardsFeatures02.text} cardsData={SectionCardsFeatures02.cardsData} cssClass={SectionCardsFeatures02.cssClass} />
            <TextImage title={SectionTextImage01.title} tabs={SectionTextImage01.tabs} tabsContent={SectionTextImage01.tabsContent} />
            <SectionCardsFeatures cardsData={SectionCardsFeatures03.cardsData} />
            <TextImage tabs={SectionTextImage02.tabs} tabsContent={SectionTextImage02.tabsContent} />
        </div>
    )
}

export default Home