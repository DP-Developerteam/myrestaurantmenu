// Import styles and libraries
import './../../styles/com-se.pricing-cards.scss';
import { useState } from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
// Import components
import Button from '../ui/Button';
// Import icons & images
import { IconArrow } from '../ui/Icons';
import { IconCheck } from '../../components/ui/Icons';


const PricingCards = ({intro, cardsData, cssClass}) => {
    // States for translations
    const { t } = useTranslation();

    // State to show/hide includes
    const [isIncludes, setIsIncludes] = useState(false)

    // State to track collapsing animation
    const [isCollapsing, setIsCollapsing] = useState({})

    // States for tariff
    const [isTariff, setIsTariff] = useState(true)

    // Handle includes
    function handleIncludes(index) {
        if (isIncludes[index]) {
            // Start collapsing animation
            setIsCollapsing(prev => ({ ...prev, [index]: true }));
            // Wait for animation to complete before hiding
            setTimeout(() => {
                setIsIncludes(prev => ({ ...prev, [index]: false }));
                setIsCollapsing(prev => ({ ...prev, [index]: false }));
            }, 300);
        } else {
            // Expanding - show immediately
            setIsIncludes(prev => ({ ...prev, [index]: true }));
        }
    }

    // Handle tariff
    function handleTariffOption() {
        setIsTariff(!isTariff);
    }

    // Render intro text
    const renderIntroText = () => {
        return (
            <div className='intro-text'>
                <h2 className='font-larger'>
                    <Trans i18nKey={intro.title}
                        components={{
                            bold: <span className='font-bold' />,
                            boldRed: <strong className='font-red'/>,
                        }}
                    />
                </h2>
                <p>
                    <Trans i18nKey={intro.description}
                        components={{
                            bold: <span className='font-bold' />,
                            boldRed: <strong className='font-red'/>,
                        }}
                    />
                </p>
            </div>
        )
    }

    // Render buttons
    const renderButtons = () => {
        return (
            <div className='tariff-selection-container'>
                <div className='buttons-container'>
                    <Button
                        text='ui.buttons.monthly'
                        cssClass={`btn-solid-light btn-inner-shadow ${!isTariff ? 'btn-gradient-red' : ''}`}
                        onClick={() => handleTariffOption()}
                    />
                    <Button
                        text='ui.buttons.yearly'
                        cssClass={`btn-solid-light btn-inner-shadow ${isTariff ? 'btn-gradient-red' : ''}`}
                        onClick={() => handleTariffOption()}
                    />
                </div>
                <p className='font-smaller'>Save money with yearly payment</p>
            </div>
        )
    }

    // Render cards
    const renderCards = (card, index) => {
        return (
            <div className={`pricing-card ${card.cssClass === 'highlighted' ? 'pricing-card-highlighted' : ''}`} key={index}>
                <h4>{t(card.title)}</h4>
                <p>{t(card.description)}</p>
                {!isTariff ?
                    <>
                        <p className='price'>{t(card.price.yearly)}</p>
                    </>
                    :
                    <>
                        <p className='price'>{t(card.price.monthly)}</p>
                    </>
                }
                <div className='complementary-text'>
                    <p className='font-smaller'>/ per month</p>
                    <p className='font-smaller'>Save money with yearly payment</p>
                </div>
                <Button
                    text={'ui.buttons.included'}
                    cssClass={`includes-button btn-solid-light btn-inner-shadow ${isIncludes[index] ? 'includes-button-active' : ''}`}
                    onClick={() => handleIncludes(index)}
                    icon={<IconArrow />}
                />
                {/* {isIncludes[index] &&
                    <>
                        {card.featureIncluded.map((bullet, index) =>
                            <p key={index} className='bullet'>
                                <IconCheck className='icon' />
                                <Trans i18nKey={bullet}
                                    components={{
                                        bold: <span className='font-bold' />,
                                        boldRed: <strong className='font-red'/>,
                                    }}
                                />
                            </p>
                        )}
                    </>
                }
                {isIncludes[index] &&
                    <>
                        {card.featureNotIncluded.map((bullet, index) =>
                            <p key={index} className='bullet not-included'>
                                {t(bullet)}
                            </p>
                        )}
                    </>
                } */}
                {isIncludes[index] &&
                    <div className={`features-container ${isCollapsing[index] ? 'collapsing' : ''}`}>
                        {card.featureIncluded.map((bullet, bulletIndex) =>
                            <p key={bulletIndex} className='bullet'>
                                <IconCheck className='icon' />
                                <Trans i18nKey={bullet}
                                    components={{
                                        bold: <span className='font-bold' />,
                                        boldRed: <strong className='font-red'/>,
                                    }}
                                />
                            </p>
                        )}
                        {card.featureNotIncluded.map((bullet, bulletIndex) =>
                            <p key={bulletIndex} className='bullet not-included'>
                                {t(bullet)}
                            </p>
                        )}
                    </div>
                }
                {card.cssClass === 'highlighted' ?
                    <Button text={'ui.buttons.select'} cssClass={'btn-gradient-red'} to={'/'} />
                    :
                    <Button text={'ui.buttons.select'} cssClass={'btn-solid-light btn-inner-shadow'} to={'/'} />
                }
            </div>
        )
    }

    return (
        <section className={`section section-pricing ${cssClass}`} >
            {intro && renderIntroText()}
            {renderButtons()}
            <div className='pricing-cards-container'>
                {cardsData.map(renderCards)}
            </div>
        </section>
    )
}

export default PricingCards