// Import styles and libraries
import '../../App.scss';
// Import components
import ComponentHero from "../../components/sections/Hero";
import ComponentCards from "../../components/sections/Cards";
import ComponentTabs from "../../components/sections/Tabs";
import ComponentCarouselText from "../../components/sections/CarouselText";
import ComponentContactCTA from "../../components/sections/ContactCTA";
import ComponentFaq from "../../components/sections/Faq";
// Import icons & images
import ImgContactCta from '../../assets/img/contact-cta.webp';
import ImgCalendar from "../../assets/img/calendar.png";
import ImgHero01 from "../../assets/img/hero-01.jpg";
import ImgHero02 from "../../assets/img/hero-02.jpg";
import ImgHero03 from "../../assets/img/hero-03.jpg";


const Contact = () => {

    const SectionHero = {
        "text": {
            "intro": "section.hero.contact.intro",
            "title": "section.hero.contact.title",
            "subtitle": "section.hero.contact.subtitle",
            "bullets": [
                "section.hero.common.bullets.24h",
                "section.hero.common.bullets.chat",
                "section.hero.common.bullets.formular",
            ]
        },
        "slides": [
            {
                image: ImgHero01,
                alt: "DEMO for the menu of a Pizzeria restaurant",
                width: 834,
                height: 450,
            }
        ],
        "buttons": [
            {
                text: "ui.buttons.chatbot",
                cssClass: "btn-solid-red btn-hover-gradient-red",
                onClick: "openChat",
            }
        ]
    }

    return (
        <div className='page page-contact'>
            <ComponentHero text={SectionHero.text} slides={SectionHero.slides} buttons={SectionHero.buttons} />
        </div>
    )
}

export default Contact