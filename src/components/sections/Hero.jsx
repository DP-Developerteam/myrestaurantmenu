// Import styles and libraries
import './../../styles/com-se.hero.scss';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
// Import hooks
import useMediaQuery from '../../hooks/useMediaQuery';
// Import components
import Carousel from '../ui/Carousel';
import Button from '../ui/Button';
// Import icons & images
import SliderHero01 from '../../assets/img/slider-hero-1.jpg';
import SliderHero02 from '../../assets/img/slider-hero-2.jpg';
import SliderHero03 from '../../assets/img/slider-hero-3.jpg';
import SliderHero04 from '../../assets/img/slider-hero-4.jpg';

const Hero = () => {
    // States for translations
    const { t } = useTranslation();

    // Declare slides for carrousel component
    const heroSlides = [
        {
            image: SliderHero01,
            alt: 'Delicious pizza',
            text: 'Try our new Margherita',
            link: '/contact',
        },
        {
            image: SliderHero02,
            alt: 'Refreshing drink',
            text: 'Summer specials available!',
            // link: '/demo',
        },
        {
            image: SliderHero03,
            alt: 'Refreshing drink',
        },
        {
            image: SliderHero04,
            alt: 'Refreshing drink',
        },
    ];

    // Declare state for responsive design using custom hook
    const isDesktop = useMediaQuery('(min-width: 480px)');

    return (
        <section className='section section-hero'>
            <div className='section-content text-container'>
                <span className='font-small'>
                    <Trans i18nKey="section.hero.welcome"
                        components={{
                            1: <strong className='font-red'/>,
                        }}
                    />
                </span>
                <hr className='line-red'/>
                <h1 className='title'>{t('section.hero.homepage.title')}</h1>
                <h2 className='subtitle'>{t('section.hero.homepage.subtitle')}</h2>
                <p className='claimer'>
                    <Trans i18nKey="section.hero.homepage.claimer"
                        components={{
                            1: <span className='font-bold' />,
                            2: <span className='font-bold font-red' />
                        }}
                    />
                </p>
            </div>
            <div className='section-content carousel-container'>
                {isDesktop ? <Carousel slides={heroSlides} /> : null}
                <div className='buttons-container'>
                    <Button text='ui.buttons.liveDemo' cssClass='btn-solid-light btn-inner-shadow' type= 'submit'/>
                    <Button text='ui.buttons.promo' cssClass='btn-solid-red btn-hover-gradient-red' />
                </div>
            </div>
        </section>
    )
}

export default Hero;