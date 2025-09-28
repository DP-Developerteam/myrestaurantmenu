// Import styles and libraries
import '../../styles/com-se.tabs.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// Import hooks
import { useChatActions } from '../../hooks/useChatActions';
// Import components
import Button from '../ui/Button';
// Images and icons
import { IconCheck } from '../../components/ui/Icons';


const Tabs = ({title, tabs, tabsContent, cssClass, backgroundOverflow}) => {
    // States for translations
    const { t } = useTranslation();

    // Use hook chat actions
    const { openChat } = useChatActions();

    // State to track which tab is currently active (index-based)
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    // Get the currently active content based on the active tab index
    const activeContent = tabsContent && tabsContent[activeTabIndex];

    // Function to handle tab click
    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    // Render tabs
    const renderTabs = () => {
        return (
            <ul className='tabs-container' >
                {tabsContent.map((content, index) => (
                    <li
                        key={index}
                        className={`tab ${activeTabIndex === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                        style={{ cursor: 'pointer' }}
                    >
                        {t(content.title)}
                    </li>
                ))}
            </ul>
        )
    }

    // Render bullets
    const renderBullets = () => {
        return (
            <>
                {activeContent.title && !tabs ?
                    <h3 className='title'>{t(activeContent.title)}</h3>
                    : null
                }
                <ul className='bullets-container'>
                    {Object.entries(activeContent.bullets).map(([key, bullet]) => (
                        <li className='bullet' key={key}>
                            <IconCheck className='icon' /> {t(bullet)}
                        </li>
                    ))}
                </ul>
            </>
        )
    }

    // Render buttons
    const renderButtons = () => {
        return (
            <div className='buttons-container'>
                {activeContent.buttons.map((btn, i) => {
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
        )
    }

    // Render image
    const renderImage = () => {
        return (
            <div className='image-container'>
                <img
                    src={activeContent.image.src || activeContent.image}
                    alt={activeContent.image.alt || 'Image'}
                    width={activeContent.image?.width}
                    height={activeContent.image?.height}
                />
            </div>
        )
    }

    // Render overflow background
    const renderBackgroundOverflow = () => {
        return (
            <div className={`${backgroundOverflow}`}></div>
        )
    }


    return (
        <section className={`section section-tabs ${cssClass}`} >
            {backgroundOverflow && renderBackgroundOverflow()}
            {title && <h3 className='title'>{t(title)}</h3> }
            {tabs && tabsContent && renderTabs()}
            <div className='content-container'>
                <div className='text-container'>
                    {activeContent && activeContent.bullets && renderBullets()}
                    {activeContent && activeContent.buttons && renderButtons()}
                </div>
                {activeContent.image && renderImage()}
            </div>
        </section>
    )
}

export default Tabs