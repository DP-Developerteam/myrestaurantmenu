// Import styles and libraries
import '../../styles/com-se.tabs.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const Tabs = ({title, tabs, cssClass, tabsContent, backgroundOverflow}) => {
    // States for translations
    const { t } = useTranslation();

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
                {cssClass === 'section-tab-red' ?
                    <h3 className='title'>{t(tabsContent[0].title)}</h3>
                    : null
                }
                <ul className='bullets-container'>
                    {Object.entries(activeContent.bullets).map(([key, bullet]) => (
                        <li className='bullet' key={key}>
                            <span className='icon'>o</span> {t(bullet)}
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
                {Object.entries(activeContent.buttons).map(([key, button]) => (
                    <button className={button.cssClass} key={key}>
                        {t(button.content)}
                    </button>
                ))}
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