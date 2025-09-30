// Import styles and libraries
import '../../App.scss';
// Import components
import ComponentHero from "../../components/sections/Hero";
import ComponentPricing from "../../components/sections/PricingCards";
// Import icons & images
import ImgHero01 from "../../assets/img/hero-01.jpg";


const Pricing = () => {
    const SectionHero = {
        "text": {
            "intro": "section.hero.pricing.intro",
            "title": "section.hero.pricing.title",
            "subtitle": "section.hero.pricing.subtitle",
            "bullets": [
                "section.hero.common.bullets.transparent",
                "section.hero.common.bullets.commission",
                "section.hero.common.bullets.flexible",
                "section.hero.common.bullets.customDomain",
                "section.hero.common.bullets.support"
            ]
        },
        "slides": [
            {
                image: ImgHero01,
                alt: "Delicious pizza",
                width: 834,
                height: 450,
            }
        ],
        "buttons": [
            {
                text: "ui.buttons.promo",
                cssClass: "btn-solid-red btn-hover-gradient-red",
                onClick: "openChat:trial",
            }
        ]
    }
    const SectionRestaurantPricing = {
        "intro": {
            "title": "section.pricingCards.restaurants.intro.title",
            "description": "section.pricingCards.restaurants.intro.description"
        },
        "cardsData": [
            {
                "title": "section.pricingCards.restaurants.plan01.title",
                "description": "section.pricingCards.restaurants.plan01.description",
                "price": {
                    "monthly": "section.pricingCards.restaurants.plan01.price.monthly",
                    "annual": "section.pricingCards.restaurants.plan01.price.annual"
                },
                "featureIncluded": [
                    "section.pricingCards.common.multilingual2",
                    "section.pricingCards.common.qrCode",
                    "section.pricingCards.common.customization",
                ],
                "featureNotIncluded": [
                    "section.pricingCards.common.url",
                    "section.pricingCards.common.images",
                    "section.pricingCards.common.video",
                    "section.pricingCards.common.booking",
                    "section.pricingCards.common.giftCard",
                    "section.pricingCards.common.clientSignIn",
                    "section.pricingCards.common.popUp",
                    "section.pricingCards.common.emailMarketing",
                ]
            },
            {
                "title": "section.pricingCards.restaurants.plan02.title",
                "description": "section.pricingCards.restaurants.plan02.description",
                "price": {
                    "monthly": "section.pricingCards.restaurants.plan02.price.monthly",
                    "annual": "section.pricingCards.restaurants.plan02.price.annual"
                },
                "featureIncluded": [
                    "section.pricingCards.common.multilingual2",
                    "section.pricingCards.common.qrCode",
                    "section.pricingCards.common.customization",
                    "section.pricingCards.common.url",
                    "section.pricingCards.common.images",
                ],
                "featureNotIncluded": [
                    "section.pricingCards.common.video",
                    "section.pricingCards.common.booking",
                    "section.pricingCards.common.giftCard",
                    "section.pricingCards.common.clientSignIn",
                    "section.pricingCards.common.popUp",
                    "section.pricingCards.common.emailMarketing",
                ]
            },
            {
                "cssClass": "highlighted",
                "title": "section.pricingCards.restaurants.plan03.title",
                "description": "section.pricingCards.restaurants.plan03.description",
                "price": {
                    "monthly": "section.pricingCards.restaurants.plan03.price.monthly",
                    "annual": "section.pricingCards.restaurants.plan03.price.annual"
                },
                "featureIncluded": [
                    "section.pricingCards.common.multilingual4",
                    "section.pricingCards.common.qrCode",
                    "section.pricingCards.common.customization",
                    "section.pricingCards.common.url",
                    "section.pricingCards.common.images",
                    "section.pricingCards.common.video",
                    "section.pricingCards.common.booking",
                ],
                "featureNotIncluded": [
                    "section.pricingCards.common.giftCard",
                    "section.pricingCards.common.clientSignIn",
                    "section.pricingCards.common.popUp",
                    "section.pricingCards.common.emailMarketing",
                ]
            },
            {
                "title": "section.pricingCards.restaurants.plan04.title",
                "description": "section.pricingCards.restaurants.plan04.description",
                "price": {
                    "monthly": "section.pricingCards.restaurants.plan04.price.monthly",
                    "annual": "section.pricingCards.restaurants.plan04.price.annual"
                },
                "featureIncluded": [
                    "section.pricingCards.common.multilingual6",
                    "section.pricingCards.common.qrCode",
                    "section.pricingCards.common.customization",
                    "section.pricingCards.common.url",
                    "section.pricingCards.common.images",
                    "section.pricingCards.common.video",
                    "section.pricingCards.common.booking",
                    "section.pricingCards.common.giftCard",
                    "section.pricingCards.common.clientSignIn",
                    "section.pricingCards.common.popUp",
                    "section.pricingCards.common.emailMarketing",
                ],
                "featureNotIncluded": [
                ]
            },
        ]
    }
    const SectionRestaurantChainPricing = {
        "intro": {
            "title": "section.pricingCards.restaurantChains.intro.title",
            "description": "section.pricingCards.restaurantChains.intro.description"
        },
        "cardsData": [
            {
                "title": "section.pricingCards.restaurantChains.plan01.title",
                "description": "section.pricingCards.restaurantChains.plan01.description",
                "price": {
                    "monthly": "section.pricingCards.restaurantChains.plan01.price.monthly",
                    "annual": "section.pricingCards.restaurantChains.plan01.price.annual"
                },
                "featureIncluded": [
                    "section.pricingCards.common.multiLocation",
                    "section.pricingCards.common.centralDashboard",
                    "section.pricingCards.common.multilingual2",
                    "section.pricingCards.common.qrCode",
                    "section.pricingCards.common.customization",
                    "section.pricingCards.common.url",
                ],
                "featureNotIncluded": [
                    "section.pricingCards.common.branchManagement",
                    "section.pricingCards.common.sharedLoyalty",
                    "section.pricingCards.common.bulkDiscounts",
                    "section.pricingCards.common.chainAnalytics",
                    "section.pricingCards.common.images",
                    "section.pricingCards.common.video",
                    "section.pricingCards.common.booking",
                    "section.pricingCards.common.giftCard",
                    "section.pricingCards.common.clientSignIn",
                    "section.pricingCards.common.popUp",
                    "section.pricingCards.common.emailMarketing",
                ]
            },
            {
                "title": "section.pricingCards.restaurantChains.plan02.title",
                "description": "section.pricingCards.restaurantChains.plan02.description",
                "price": {
                    "monthly": "section.pricingCards.restaurantChains.plan02.price.monthly",
                    "annual": "section.pricingCards.restaurantChains.plan02.price.annual"
                },
                "featureIncluded": [
                    "section.pricingCards.common.multiLocation",
                    "section.pricingCards.common.centralDashboard",
                    "section.pricingCards.common.branchManagement",
                    "section.pricingCards.common.multilingual2",
                    "section.pricingCards.common.qrCode",
                    "section.pricingCards.common.customization",
                    "section.pricingCards.common.url",
                    "section.pricingCards.common.images",
                ],
                "featureNotIncluded": [
                    "section.pricingCards.common.sharedLoyalty",
                    "section.pricingCards.common.bulkDiscounts",
                    "section.pricingCards.common.chainAnalytics",
                    "section.pricingCards.common.video",
                    "section.pricingCards.common.booking",
                    "section.pricingCards.common.giftCard",
                    "section.pricingCards.common.clientSignIn",
                    "section.pricingCards.common.popUp",
                    "section.pricingCards.common.emailMarketing",
                ]
            },
            {
                "cssClass": "highlighted",
                "title": "section.pricingCards.restaurantChains.plan03.title",
                "description": "section.pricingCards.restaurantChains.plan03.description",
                "price": {
                    "monthly": "section.pricingCards.restaurantChains.plan03.price.monthly",
                    "annual": "section.pricingCards.restaurantChains.plan03.price.annual"
                },
                "featureIncluded": [
                    "section.pricingCards.common.multiLocation",
                    "section.pricingCards.common.centralDashboard",
                    "section.pricingCards.common.branchManagement",
                    "section.pricingCards.common.sharedLoyalty",
                    "section.pricingCards.common.multilingual4",
                    "section.pricingCards.common.qrCode",
                    "section.pricingCards.common.customization",
                    "section.pricingCards.common.url",
                    "section.pricingCards.common.images",
                    "section.pricingCards.common.video",
                    "section.pricingCards.common.booking",
                ],
                "featureNotIncluded": [
                    "section.pricingCards.common.bulkDiscounts",
                    "section.pricingCards.common.chainAnalytics",
                    "section.pricingCards.common.giftCard",
                    "section.pricingCards.common.clientSignIn",
                    "section.pricingCards.common.popUp",
                    "section.pricingCards.common.emailMarketing",
                ]
            },
            {
                "title": "section.pricingCards.restaurantChains.plan04.title",
                "description": "section.pricingCards.restaurantChains.plan04.description",
                "price": {
                    "monthly": "section.pricingCards.restaurantChains.plan04.price.monthly",
                    "annual": "section.pricingCards.restaurantChains.plan04.price.annual"
                },
                "featureIncluded": [
                    "section.pricingCards.common.multiLocation",
                    "section.pricingCards.common.centralDashboard",
                    "section.pricingCards.common.branchManagement",
                    "section.pricingCards.common.sharedLoyalty",
                    "section.pricingCards.common.bulkDiscounts",
                    "section.pricingCards.common.chainAnalytics",
                    "section.pricingCards.common.multilingual6",
                    "section.pricingCards.common.qrCode",
                    "section.pricingCards.common.customization",
                    "section.pricingCards.common.url",
                    "section.pricingCards.common.images",
                    "section.pricingCards.common.video",
                    "section.pricingCards.common.booking",
                    "section.pricingCards.common.giftCard",
                    "section.pricingCards.common.clientSignIn",
                    "section.pricingCards.common.popUp",
                    "section.pricingCards.common.emailMarketing",
                ],
                "featureNotIncluded": [
                ]
            },
        ]
    }


    return (
        <div className='page page-pricing'>
            <ComponentHero text={SectionHero.text} slides={SectionHero.slides} buttons={SectionHero.buttons} />
            <ComponentPricing intro={SectionRestaurantPricing.intro} cardsData={SectionRestaurantPricing.cardsData} />
            <ComponentPricing intro={SectionRestaurantChainPricing.intro} cardsData={SectionRestaurantChainPricing.cardsData} />

        </div>
    )
}

export default Pricing