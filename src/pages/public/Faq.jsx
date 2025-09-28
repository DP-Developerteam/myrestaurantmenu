// Import styles and libraries
import '../../App.scss';
// Import components
import ComponentHero from "../../components/sections/Hero";
import ComponentFaq from "../../components/sections/Faq";
// Import icons & images
import ImgHero01 from "../../assets/img/hero-01.jpg";
import ImgHero02 from "../../assets/img/hero-02.jpg";
import ImgHero03 from "../../assets/img/hero-03.jpg";


const Faq = () => {

    const SectionHero = {
        "text": {
            "intro": "section.hero.faqs.intro",
            "title": "section.hero.faqs.title",
            "subtitle": "section.hero.faqs.subtitle"
        },
        "slides": [
            {
                image: ImgHero01,
                alt: "DEMO for the menu of a Pizzeria restaurant",
                text: "Visit the demo for the menu of a Pizzeria restaurant",
                cta: "ui.buttons.demoPiza",
                link: "/",
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
    const SectionFaq = {
        "text": {
            "title": "section.faq.title",
            "paragraph": "section.faq.description"
        },
        "buttons": [
            {
                text: "ui.buttons.chatAssistant",
                cssClass: "btn-solid-red",
                onClick: "openChat",
            }
        ],
        "faqs": [
            {
                question: 'section.faq.questions.howLong.question',
                answer: 'section.faq.questions.howLong.answer'
            },
            {
                question: 'section.faq.questions.responsiveDesign.question',
                answer: 'section.faq.questions.responsiveDesign.answer'
            },
            {
                question: 'section.faq.questions.designChanges.question',
                answer: 'section.faq.questions.designChanges.answer'
            },
            {
                question: 'section.faq.questions.expect30days.question',
                answer: 'section.faq.questions.expect30days.answer'
            },
            {
                question: 'section.faq.questions.updateMyself.question',
                answer: 'section.faq.questions.updateMyself.answer'
            },
            {
                question: 'section.faq.questions.appDownload.question',
                answer: 'section.faq.questions.appDownload.answer'
            },
            {
                question: 'section.faq.questions.customerSupport.question',
                answer: 'section.faq.questions.customerSupport.answer'
            },
            {
                question: 'section.faq.questions.secure.question',
                answer: 'section.faq.questions.secure.answer'
            }
        ]
    };

    return (
        <div className='page page-faq'>
            <ComponentHero text={SectionHero.text} slides={SectionHero.slides} buttons={SectionHero.buttons} />
            <ComponentFaq text={SectionFaq.text} buttons={SectionFaq.buttons} faqs={SectionFaq.faqs} />
        </div>
    )
}

export default Faq