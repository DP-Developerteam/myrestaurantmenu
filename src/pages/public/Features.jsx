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

    return (
        <div className='page page-home'>
            <ComponentHero text={SectionHero.text} slides={SectionHero.slides} buttons={SectionHero.buttons} />
            <ComponentCards cardsData={SectionCardsFeatures01.cardsData} />
        </div>
    )
}

export default Features