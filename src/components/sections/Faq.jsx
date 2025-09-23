// Import styles and libraries
import '../../styles/com-se.faq.scss';
import { useOutletContext } from 'react-router-dom';
// Import components
import Accordion from '../ui/Accordion';

const Faq = () => {

    // State to manage chat badge
    const { setIsChatOpen } = useOutletContext();

    const faqs = [
        {
            question: 'How long does it take until my digital menu is ready?',
            answer: 'Once we receive your menu details and branding assets (logo, colors, images), your digital menu is usually ready within 3–5 business days. We make sure it works seamlessly before handing it over to you.'
        },
        {
            question: 'What does a responsive web app mean?',
            answer: 'Responsive means your digital menu automatically adapts to any device — mobile phones, tablets, or desktop screens. Guests will have a smooth experience without needing to download an app.'
        },
        {
            question: 'What design changes are possible?',
            answer: 'We customize colors, fonts, and layouts to match your restaurant’s branding. You can also add photos, highlight popular dishes, and update your menu items anytime. If you need advanced customization, our team can support you.'
        },
        {
            question: 'What can I expect during the first 30 days?',
            answer: 'You can fully test the platform free of charge for 30 days. This includes uploading your real menu, checking how guests interact, and requesting design tweaks. No risk, no commitment — we want you to be 100% confident before continuing.'
        },
        {
            question: 'Can I update my menu by myself?',
            answer: 'Yes! You’ll have access to a simple admin dashboard where you can edit items, prices, or photos instantly. No technical skills required.'
        },
        {
            question: 'Do my guests need to download an app?',
            answer: 'No downloads are needed. Your menu is accessible through a QR code or a direct link, so guests can open it instantly in their browser.'
        },
        {
            question: 'Is customer support included?',
            answer: 'Absolutely. We provide dedicated support via email, phone, or live chat. Most requests are resolved within 24 hours.'
        },
        {
            question: 'How secure is the platform?',
            answer: 'Your data and your guests’ data are protected with industry-standard security protocols. We also provide regular updates and monitoring to ensure reliability.'
        }
    ];


    return (
        <section className='section secion-faq'>
            <div className='text-container'>
                <h4 className='title'>FAQ</h4>
                <p className='font-normal'>You can either fill a formular so we come back to you with a tailored service for your requirements. Or you can direct call or contact our founder.</p>
                <button className='btn-solid-red' onClick={() => setIsChatOpen(true)} >Chat live with Diego’s assistant</button>
            </div>
            <div className='accordion-container'>
                {faqs.map((faq, index) => (
                    <Accordion
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </section>
    )
}

export default Faq