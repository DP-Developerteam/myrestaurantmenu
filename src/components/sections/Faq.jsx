// Import styles and libraries
import '../../styles/com-se.faq.scss';
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';
// Import components
import Accordion from '../ui/Accordion';
import Button from '../ui/Button';


const Faq = ({text, buttons, faqs}) => {
    // States for translations
    const { t } = useTranslation();

    // State to manage chat badge
    const { setIsChatOpen } = useOutletContext();

    // Render buttons
    const renderButtons = () => {
        return (
            <>
                <div className='buttons-container'>
                    {buttons.map((btn, i) => {

                        const isOpenChat = btn.action === 'openChat' || btn.onClick === 'setIsChatOpen';
                        const clickHandler = isOpenChat ? () => setIsChatOpen(true) : btn.onClick;
                        const toProp = isOpenChat ? undefined : btn.to;

                        return (
                            <Button
                                key={i}
                                text={btn.text}
                                cssClass={btn.cssClass}
                                to={toProp}
                                onClick={clickHandler}
                                icon={btn.icon}
                                aria-label={btn.ariaLabel}
                            />
                        )
                    }
                    )}
                </div>
            </>
        )
    }

    return (
        <section className='section secion-faq'>
            <div className='text-container'>
                <h4 className='title'>{t(text.title)}</h4>
                <p className='font-normal'>{t(text.paragraph)}</p>
                {buttons && renderButtons()}
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