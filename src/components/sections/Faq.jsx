// Import styles and libraries
import '../../styles/com-se.faq.scss';
import { useTranslation } from 'react-i18next';
// Import hooks
import { useChatActions } from '../../hooks/useChatActions';
// Import components
import Accordion from '../ui/Accordion';
import Button from '../ui/Button';


const Faq = ({text, buttons, faqs}) => {
    // States for translations
    const { t } = useTranslation();

    // Use hook chat actions
    const { openChat } = useChatActions();

    // Render buttons
    const renderButtons = () => {
        return (
            <>
                <div className='buttons-container'>
                    {buttons.map((btn, i) => {
                        // Manage actions
                        const isOpenChat = btn.onClick === 'openChat';
                        const clickHandler = isOpenChat ? openChat : btn.onClick;
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
                    })}
                </div>
            </>
        )
    }

    return (
        <section className='section secion-faq'>
            <div className='faq-container'>
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
            </div>
        </section>
    )
}

export default Faq