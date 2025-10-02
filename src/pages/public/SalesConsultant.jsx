// Import styles and libraries
import '../../App.scss';

// Import components
import Chatbox from '../../components/sections/Chatbox';
import ComponentFaq from "../../components/sections/Faq";


const SalesConsultant = () => {

    const SectionFaq = {
        "text": {
            "title": "section.faq.title",
            "paragraph": "section.faq.description"
        },
        "buttons": [
            {
                text: "ui.buttons.contact",
                cssClass: "btn-solid-red",
                to: "contact",
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
            }
        ]
    };

    return (
        <div className='page page-sales-consultant'>
            <Chatbox />
            <ComponentFaq text={SectionFaq.text} buttons={SectionFaq.buttons} faqs={SectionFaq.faqs} />
        </div>
    )
}

export default SalesConsultant