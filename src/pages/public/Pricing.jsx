// Import styles and libraries
import '../../App.scss';
// Import components
import ComponentHero from "../../components/sections/Hero";
// Import icons & images
import ImgHero01 from "../../assets/img/hero-01.jpg";


const Pricing = () => {
    const SectionHero = {
        "text": {
            "intro": "section.hero.pricing.intro",
            "title": "section.hero.pricing.title",
            "subtitle": "section.hero.pricing.subtitle",
            "bullets": [
                "section.hero.common.bullets.transparent",
                "section.hero.common.bullets.commission",
                "section.hero.common.bullets.flexible",
                "section.hero.common.bullets.customDomain",
                "section.hero.common.bullets.support"
            ]
        },
        "slides": [
            {
                image: ImgHero01,
                alt: "Delicious pizza",
                width: 834,
                height: 450,
            }
        ],
        "buttons": [
            {
                text: "ui.buttons.promo",
                cssClass: "btn-solid-red btn-hover-gradient-red",
                onClick: "openChat",
            }
        ]
    }

    return (
        <div className='page page-pricing'>
            <ComponentHero text={SectionHero.text} slides={SectionHero.slides} buttons={SectionHero.buttons} />
        </div>
    )
}

export default Pricing