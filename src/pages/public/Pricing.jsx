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
            "title": "Prices for <boldRed>Restaurants</boldRed>",
            "description": "Description pricing for restaurants"
        },
        "cardsData": [
            {
                "title": "Package S",
                "description": "Description Package S",
                "price": {
                    "monthly": "3,99 €",
                    "yearly": "5,99 €"
                },
                "featureIncluded": [
                    "Multilingual: 2 languages",
                    "QR Code creation",
                    "Customization",
                ],
                "featureNotIncluded": [
                    "Custom URL",
                    "Images in the menu",
                    "Videos in the menu",
                    "Gift & stamp-cards",
                    "Reservation",
                    "Clients log in",
                    "Promotion pop ups",
                    "Email marketing",
                ]
            },
            {
                "title": "Package M",
                "description": "Description Package M",
                "price": {
                    "monthly": "9,99 €",
                    "yearly": "15,99 €"
                },
                "featureIncluded": [
                    "<boldRed>Everything in package S</boldRed>",
                    "Custom URL",
                    "Images in the menu",
                ],
                "featureNotIncluded": [
                    "Videos in the menu",
                    "Gift & stamp-cards",
                    "Reservation",
                    "Clients log in",
                    "Promotion pop ups",
                    "Email marketing",
                ]
            },
            {
                "title": "Package L",
                "description": "Description Package L",
                "price": {
                    "monthly": "14,99 €",
                    "yearly": "29,99 €"
                },
                "featureIncluded": [
                    "<boldRed>Everything in package M</boldRed>",
                    "Multilingual: 4 languages",
                    "Videos in the menu",
                    "Clients log in",
                    "Gift & stamp-cards",
                ],
                "featureNotIncluded": [
                    "Reservation",
                    "Promotion pop ups",
                    "Email marketing",
                ],
                "cssClass": "highlighted"
            },
            {
                "title": "Package XL",
                "description": "Description Package XL",
                "price": {
                    "monthly": "24,99 €",
                    "yearly": "39,99 €"
                },
                "featureIncluded": [
                    "<boldRed>Everything in package L</boldRed>",
                    "Multilingual: 6 languages",
                    "Reservation",
                    "Promotion pop ups",
                    "Email marketing",
                ],
                "featureNotIncluded": [
                ]
            }
        ]
    }
    const SectionRestaurantChainPricing = {
        "intro": {
            "title": "Prices for <boldRed>Restaurant chains</boldRed>",
            "description": "Description pricing for restaurant chains, or multiple restaurants"
        },
        "cardsData": [
            {
                "title": "Package S",
                "description": "Description Package S",
                "price": {
                    "monthly": "3,99 €",
                    "yearly": "5,99 €"
                },
                "featureIncluded": [
                    "Multilingual: 2 languages",
                    "QR Code creation",
                    "Customization",
                ],
                "featureNotIncluded": [
                    "Custom URL",
                    "Images in the menu",
                    "Videos in the menu",
                    "Gift & stamp-cards",
                    "Reservation",
                    "Clients log in",
                    "Promotion pop ups",
                    "Email marketing",
                ]
            },
            {
                "title": "Package M",
                "description": "Description Package M",
                "price": {
                    "monthly": "9,99 €",
                    "yearly": "15,99 €"
                },
                "featureIncluded": [
                    "<boldRed>Everything in package S</boldRed>",
                    "Custom URL",
                    "Images in the menu",
                ],
                "featureNotIncluded": [
                    "Videos in the menu",
                    "Gift & stamp-cards",
                    "Reservation",
                    "Clients log in",
                    "Promotion pop ups",
                    "Email marketing",
                ],
                "cssClass": "highlighted"
            },
            {
                "title": "Package L",
                "description": "Description Package L",
                "price": {
                    "monthly": "14,99 €",
                    "yearly": "29,99 €"
                },
                "featureIncluded": [
                    "<boldRed>Everything in package M</boldRed>",
                    "Multilingual: 4 languages",
                    "Videos in the menu",
                    "Clients log in",
                    "Gift & stamp-cards",
                ],
                "featureNotIncluded": [
                    "Reservation",
                    "Promotion pop ups",
                    "Email marketing",
                ]
            },
            {
                "title": "Package XL",
                "description": "Description Package XL",
                "price": {
                    "monthly": "24,99 €",
                    "yearly": "39,99 €"
                },
                "featureIncluded": [
                    "<boldRed>Everything in package L</boldRed>",
                    "Multilingual: 6 languages",
                    "Reservation",
                    "Promotion pop ups",
                    "Email marketing",
                ],
                "featureNotIncluded": [
                ]
            }
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