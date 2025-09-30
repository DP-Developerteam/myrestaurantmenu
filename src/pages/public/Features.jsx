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
import ImgHero01 from "../../assets/img/hero-01.jpg";

import ImgCommission from "../../assets/img/commission.webp";
import ImgGiftCart from "../../assets/img/gift-card.webp";
import ImgMultilingual from "../../assets/img/multilingual.webp";
import ImgQrCode from "../../assets/img/qr-code.webp";
import ImgQrCodePhone from "../../assets/img/qr-code-phone.png";
import ImgResponsive from "../../assets/img/responsive.webp";
import ImgUxResponsive from "../../assets/img/ux-friendly.webp";
import IconChains from "../../assets/img/icon-chains.svg";
import IconGastro from "../../assets/img/icon-gastro-market.svg";
import IconHotels from "../../assets/img/icon-hotels.svg";
import IconRestaurant from "../../assets/img/icon-restaurant.svg";
import ImgDataOwnership from "../../assets/img/data-ownership.webp";
import ImgAbTesting from "../../assets/img/ab-testing.webp";
import ImgCustomization from "../../assets/img/customization.webp";
import ImgTableTurnOver from "../../assets/img/table-turnover.webp";

import SliderHero01 from "../../assets/img/slider-hero-1.jpg";
import SliderHero02 from "../../assets/img/slider-hero-2.jpg";
import SliderHero03 from "../../assets/img/slider-hero-3.jpg";
import SliderHero04 from "../../assets/img/slider-hero-4.jpg";


import ImgViewText from "../../assets/img/feature-view-text.png";
import ImgViewImage from "../../assets/img/feature-view-image.png";
import ImgViewVideo from "../../assets/img/feature-view-video.png";




const Features = () => {

    const SectionHero = {
        "text": {
            "intro": "section.hero.features.intro",
            "title": "section.hero.features.title",
            "subtitle": "section.hero.features.subtitle",
            // "claimer": "section.hero.features.claimer",
            "bullets": [
                "section.hero.common.bullets.loading",
                "section.hero.common.bullets.engagement",
                "section.hero.common.bullets.onlinePresence",
                "section.hero.common.bullets.streamline",
                "section.hero.common.bullets.grow"
            ]
        },
        "slides": [
            {
                image: ImgHero01,
                alt: "Delicious pizza",
                width: 834,
                height: 450,
            }
        ]

    }
    const SectionCardsFeatures01 = {
        "cardsData": [
            {
            "id": 1,
            "isOnClick": true,
            "text": "section.cards.qrCode.title",
            "description": "section.cards.qrCode.description",
            "image": ImgQrCode,
            },
            {
            "id": 2,
            "isOnClick": true,
            "text": "section.cards.tablet.title",
            "description": "section.cards.tablet.description",
            "image": ImgResponsive,
            },
            {
            "id": 3,
            "isOnClick": true,
            "text": "section.cards.giftCard.title",
            "description": "section.cards.giftCard.description",
            "image": ImgGiftCart,
            },
            {
            "id": 4,
            "isOnClick": true,
            "text": "section.cards.marketing.title",
            "description": "section.cards.marketing.description",
            "image": ImgUxResponsive,
            },
            {
            "id": 5,
            "isOnClick": true,
            "text": "section.cards.multilingual.title",
            "description": "section.cards.multilingual.description",
            "image": ImgMultilingual,
            },
            {
            "id": 6,
            "cssClass": "card-red",
            "isOnClick": true,
            "text": "section.cards.comission.title",
            "description": "section.cards.comission.description",
            "image": ImgCommission,
            },
        ]
    };
    const SectionFeatureQrCode = {
        "tabs": false,
        "tabsContent": [
            {
                "title": "section.tabs.qrCode.title",
                "bullets": [
                    "section.tabs.qrCode.bullets.01",
                    "section.tabs.qrCode.bullets.02",
                    "section.tabs.qrCode.bullets.03",
                    "section.tabs.qrCode.bullets.04",
                    "section.tabs.qrCode.bullets.05",
                    "section.tabs.qrCode.bullets.06",
                ],
                "image": {
                    "src": ImgQrCodePhone,
                    "alt": "Description",
                    "width": 300,
                    "height": 300,
                }
            }
        ],
        "cssClass": "section-overflow-background section-tabs-bullet-icon",
        "backgroundOverflow": "background-base-200"
    }
    const SectionFeaturesView = {
        "intro": {
            "title": "section.cards.intro.featureViews.title",
            "description": "section.cards.intro.featureViews.description",
        },
        "cardsData": [
            {
            "id": 1,
            "isOnClick": true,
            "text": "section.cards.viewImage.title",
            "description": "section.cards.viewImage.description",
            "image": ImgViewImage,
            },
            {
            "id": 2,
            "isOnClick": true,
            "text": "section.cards.viewVideo.title",
            "description": "section.cards.viewVideo.description",
            "image": ImgViewVideo,
            },
            {
            "id": 3,
            "isOnClick": true,
            "text": "section.cards.viewText.title",
            "description": "section.cards.viewText.description",
            "image": ImgViewText,
            }
        ]
    };

    return (
        <div className='page page-home'>
            <ComponentHero text={SectionHero.text} slides={SectionHero.slides} buttons={SectionHero.buttons} />
            <ComponentCards cardsData={SectionCardsFeatures01.cardsData} />
            <ComponentTabs tabs={SectionFeatureQrCode.tabs} tabsContent={SectionFeatureQrCode.tabsContent} cssClass={SectionFeatureQrCode.cssClass} backgroundOverflow={SectionFeatureQrCode.backgroundOverflow}/>
            <ComponentCards intro={SectionFeaturesView.intro} cardsData={SectionFeaturesView.cardsData} />
        </div>
    )
}

export default Features