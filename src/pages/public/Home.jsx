// Import styles and libraries
import '../../App.scss';
// Import components
import SectionHero from '../../components/sections/Hero';
import SectionCardsFeatures from '../../components/sections/CardsBenefits';
// Import icons & images
import SliderHero01 from '../../assets/img/qr-code.webp';

const Home = () => {

    const cardsData01 = [
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
    const cardsData02 = [
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
    ];
    const cardsData03 = [
        {
            id: 1,
            isOnClick: true,
            text: 'Flip card',
            // image: SliderHero01,
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
    ];
    const textFeatures = {
        title: 'We work with companies like yours',
    }

    return (
        <div className='page page-home'>
            <SectionHero />
            <SectionCardsFeatures cardsData={cardsData01} />
            <SectionCardsFeatures cardsData={cardsData03} />
            <SectionCardsFeatures text={textFeatures} cardsData={cardsData02} cssClass='section-red-4-cards' />
            <SectionHero />
        </div>
    )
}

export default Home