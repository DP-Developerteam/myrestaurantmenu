// Import styles and libraries
import './../../styles/com-se.hero.scss';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
// Import hooks
import useMediaQuery from '../../hooks/useMediaQuery';
import { useChatActions } from '../../hooks/useChatActions';
// Import components
import Carousel from '../ui/Carousel';
import Button from '../ui/Button';

const Hero = ({text, slides, buttons, cssClass}) => {
    // States for translations
    const { t } = useTranslation();

    // Use Media query hook
    const isDesktop = useMediaQuery('(min-width: 480px)');

    // Use hook chat actions
    const { openChat } = useChatActions();

    // Render intro text
    const renderIntroText = () => {
        return (
            <>
                <span className='font-small'>
                    <Trans i18nKey={text.intro}
                        components={{
                            1: <strong className='font-red'/>,
                        }}
                    />
                </span>
                <hr className='line-red'/>
            </>
        )
    }

    // Render claimer text
    const renderClaimerText = () => {
        return (
            <>
                <p className='claimer'>
                    <Trans i18nKey={text.claimer}
                        components={{
                            1: <span className='font-bold' />,
                            2: <span className='font-bold font-red' />
                        }}
                    />
                </p>
            </>
        )
    }

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
        <section className={`section section-hero ${cssClass}`}>
            <div className='section-content text-container'>
                {text.intro && renderIntroText()}
                <h1 className='title'>{t(text.title)}</h1>
                <h2 className='subtitle'>{t(text.subtitle)}</h2>
                {text.claimer && renderClaimerText()}
            </div>
            <div className='section-content carousel-container'>
                {isDesktop ? <Carousel slides={slides} /> : null}
                {buttons && renderButtons()}
            </div>
        </section>
    )
}

export default Hero;