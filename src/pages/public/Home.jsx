// Import styles and libraries
import "../../App.scss";
// Import components
import ComponentHero from "../../components/sections/Hero";
import ComponentCards from "../../components/sections/Cards";
import ComponentTabs from "../../components/sections/Tabs";
import ComponentCarouselText from "../../components/sections/CarouselText";
import ComponentContactCTA from "../../components/sections/ContactCTA";
import ComponentFaq from "../../components/sections/Faq";
// Import icons & images
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


const Home = () => {

    const SectionHero = {
        "text": {
            "intro": "section.hero.welcome",
            "title": "section.hero.homepage.title",
            "subtitle": "section.hero.homepage.subtitle",
            "claimer": "section.hero.homepage.claimer"
        },
        "slides": [
            {
                image: SliderHero01,
                alt: "Delicious pizza",
                text: "Try our new Margherita",
                cta: "Contact us now!",
                link: "/contact",
                width: 834,
                height: 450,
            },
            {
                image: SliderHero02,
                alt: "Refreshing drink",
                text: "Summer specials available!",
                // link: "/demo",
                width: 834,
                height: 450,
            },
            {
                image: SliderHero03,
                alt: "Refreshing drink",
                width: 834,
                height: 450,
            },
            {
                image: SliderHero04,
                alt: "Refreshing drink",
                width: 834,
                height: 450,
            }
        ],
        "buttons": [
            {
                text: "ui.buttons.liveDemo",
                cssClass: "btn-solid-light btn-inner-shadow",
                to: "demos",
                ariaLabel: "Hola Aria Label"
            },
            {
                text: "ui.buttons.promo",
                cssClass: "btn-solid-red btn-hover-gradient-red",
                to: "salesconsultant"
            }
        ]

    }
    const SectionCardsFeatures01 = {
        "cardsData": [
            {
            "id": 1,
            "isOnClick": true,
            "text": "QR Code Menu",
            "image": ImgQrCode,
            "description": "Share your menu instantly with a simple QR scan. Customers can browse without downloading any app.",
            },
            {
            "id": 2,
            "isOnClick": true,
            "text": "Tablet Ready",
            "image": ImgResponsive,
            "description": "Designed to work seamlessly on tablets. Give your staff an easy, modern tool to manage orders.",
            },
            {
            "id": 3,
            "isOnClick": true,
            "text": "Gift & Stamp Cards",
            "image": ImgGiftCart,
            "description": "Reward loyal customers with digital gift and stamp cards. Easy to use and eco-friendly.",
            },
            {
            "id": 4,
            "isOnClick": true,
            "text": "Marketing Tools",
            "image": ImgUxResponsive,
            "description": "Promote your business with built-in campaigns and offers. Reach more customers effortlessly.",
            },
            {
            "id": 5,
            "isOnClick": true,
            "text": "Multilingual",
            "image": ImgMultilingual,
            "description": "Offer menus in multiple languages. Make every guest feel at home with inclusive communication.",
            },
            {
            "id": 6,
            "cssClass": "card-red",
            "isOnClick": true,
            "text": "0% Commission",
            "image": ImgCommission,
            "description": "Keep 100% of your earnings. No hidden fees, no commission on your sales.",
            },
        ]
    };
    const SectionIndustries = {
        "text": {
            "title": "We work with companies like yours",
        },
        "cardsData": [
            {
                "id": 1,
                "isOnClick": true,
                "text": "Gastro Market",
                "image": IconGastro,
                "description": "Make menus of all restaurants for your market to be in one QR code.",
                "cssClass": "card-red-faded",
            },
            {
                "id": 2,
                "isOnClick": true,
                "text": "Hotels",
                "image": IconHotels,
                "description": "Make your menu ready in the language of your guests as soon as they scan the QR code.",
                "cssClass": "card-red-faded",
            },
            {
                "id": 3,
                "isOnClick": true,
                "text": "Restaurants",
                "image": IconRestaurant,
                "description": "Leverage your status providing a digital professional service.",
                "cssClass": "card-red-faded",
            },
            {
                "id": 4,
                "isOnClick": true,
                "text": "Chains",
                "image": IconChains,
                "description": "Never before was so easy to create and maintain menus across different locations.",
                "cssClass": "card-red-faded",
            },
        ],
        "cssClass": "section-red-4-cards section-cards-icon"
    };
    const SectionSingleTab = {
        "title": "A Dining Experience They'll Remember",
        "tabs": false,
        "tabsContent": [
            {
                "bullets": {
                    "01": "Flawless Viewing, Anywhere: Our adaptive display guarantees a fast, beautiful menu on any device and any connection.",
                    "02": "Instant Access: Customers scan the QR code and the menu opens instantly in their browser. No app download required.",
                    "03": "Engage & Interact: Let diners 'like' their favorite dishes, providing you with valuable feedback while making them feel connected.",
                    "04": "Always Accurate: Show real-time availability and pricing, eliminating customer frustration and confusion.",
                },
                "buttons": {
                    "01": {
                        "content": "Check the live demo now",
                        "cssClass": "btn-solid-light btn-inner-shadow",
                        "to": "demo"
                    },
                    "02": {
                        "content": "Start trial for free",
                        "cssClass": "btn-solid-red",
                        "to": "promo"
                    }
                },
                "image": {
                    "src": ImgQrCode,
                    "alt": "Description",
                    "width": 300,
                    "height": 300,
                }
            }
        ]
    };
    const SectionCardsFeatures02 = {
        "cardsData": [
            {
                "id": 1,
                "isOnClick": true,
                "text": "Data ownership",
                "image": ImgDataOwnership,
                "description": "Este es un texto de descripción que aparece al hacer clic.",
            },
            {
                "id": 2,
                "isOnClick": true,
                "text": "A / B testing",
                "image": ImgAbTesting,
                "description": "Este es un texto de descripción que aparece al hacer clic.",
            },
            {
                "id": 3,
                "isOnClick": true,
                "text": "Customization",
                "image": ImgCustomization,
                "description": "Description"
            },
            {
                "id": 4,
                "isOnClick": true,
                "text": "Table turnover",
                "image": ImgTableTurnOver,
                "description": "Description"
            },
        ]
    };
    const SectionMultiTabs = {
        "tabs": true,
        "tabsContent": [
            {
                "title": "Effortless Management",
                "bullets": {
                    "01": "An intuitive CMS that feels like using your favorite social media app. No technical skills needed.",
                    "02": "Create, edit, and organize categories and menu items with a simple drag-and-drop interface.",
                    "03": "Schedule menus to appear at specific times of day (e.g., breakfast, lunch, dinner).",
                    "04": "Visually highlight promotions, new items, or chef\"s recommendations to drive sales.",
                },
                "image": {
                    "src": ImgQrCode, // Use screenshot of the manager CMS
                    "alt": "Restaurant menu management dashboard",
                    "width": 300,
                    "height": 300,
                }
            },
            {
                "title": "Powerful Customization",
                "bullets": {
                    "01": "Match the menu to your brand with custom colors, fonts, and your restaurant\"s logo.",
                    "02": "Choose from multiple layouts to best present your food and drinks.",
                    "03": "Add allergen information, dietary tags (vegan, gluten-free), and calorie counts easily.",
                    "04": "Create a consistent brand experience from the moment your customer sits down.",
                },
                "image": {
                    "src": ImgQrCode, // Use screenshot of customization options
                    "alt": "Customizing a digital menu",
                    "width": 300,
                    "height": 300,
                }
            },
            {
                "title": "Loyalty & Engagement",
                "bullets": {
                    "01": "Offer digital loyalty cards to encourage repeat business. 'Buy 5 coffees, get the 6th free!'",
                    "02": "Sell digital gift cards directly through your menu—a perfect revenue booster.",
                    "03": "Allow customers to create profiles to save their favorite items and track loyalty rewards.",
                    "04": "Gather direct feedback and build a community around your brand.",
                },
                "image": {
                    "src": ImgQrCode, // Use image showing the loyalty card feature
                    "alt": "Digital loyalty card on a phone",
                    "width": 300,
                    "height": 300,
                }
            },
        ],
        "cssClass": "section-overflow-background section-tabs-bullet-icon",
        "backgroundOverflow": "background-base-200"
    };
    const SectionCarouselText01 = {
        "cssClass": "section-carousel-bullet-icon",
        "title": "The Benefits at a Glance",
        "content": [
            {
                "title": "Benefits for your clients",
                "content": {
                    "01": "No wait – browse and order instantly",
                    "02": "Easy access via QR code – no app download needed",
                    "03": "Always up-to-date info (availability, prices)",
                    "04": "View in multiple formats (photo, video, list)",
                    "05": "Multi-language, multi-currency options",
                    "06": "Nutrition and allergy info at a glance",
                    "07": "Fast, hygienic, and contactless experience",
                    "08": "Leave feedback instantly",
                }
            },
            {
                "title": "Benefits for your business",
                "content": {
                    "01": "Reduce staff workload and increase efficiency",
                    "02": "Real-time menu updates (no reprints needed)",
                    "03": "Promote offers, specials, or seasonal dishes easily",
                    "04": "Increase sales with flash offers & marketing tools",
                    "05": "Reach tourists and international guests seamlessly",
                    "06": "Build trust with transparency and compliance",
                    "07": "Save costs on printing and reduce environmental waste",
                    "08": "Collect guest reviews and improve your service",
                }
            },
            {
                "title": "Benefits for your employees",
                "content": {
                    "01": "Less time explaining menu items to customers",
                    "02": "Reduced order errors and miscommunication",
                    "03": "More time to focus on service quality",
                    "04": "Easy menu management through simple interface",
                    "05": "Instant notifications for new orders",
                    "06": "Real-time inventory tracking",
                    "07": "Streamlined workflow and operations",
                    "08": "Enhanced customer satisfaction scores",
                }
            },
            {
                "title": "Technical advantages",
                "content": {
                    "01": "Cloud-based system with 99.9% uptime guarantee",
                    "02": "Mobile-responsive design for all devices",
                    "03": "Advanced analytics and reporting tools",
                    "04": "Integration with existing POS systems",
                    "05": "Secure payment processing and data protection",
                    "06": "Automatic backups and disaster recovery",
                    "07": "Regular updates and new feature rollouts",
                    "08": "24/7 technical support and maintenance",
                }
            }
        ]
    };
    const SectionCarouselText02 = {
        "title": "Hear what our clients says about MyRestaurantMenu",
        "content": [
            {
                "title": "1 Name of the business owner",
                "content": {
                    "01": "Review of the business owner. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                }
            },
            {
                "title": "2 Name of the business owner",
                "content": {
                    "01": "Review of the business owner. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                }
            },
            {
                "title": "3 Name of the business owner",
                "content": {
                    "01": "Review of the business owner. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                }
            },
            {
                "title": "4 Name of the business owner",
                "content": {
                    "01": "Review of the business owner. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                }
            },
        ]
    };
    const SectionSingleTabRed = {
        "tabs": false,
        "cssClass": "section-tab-red",
        "tabsContent": [
            {
                "title": "Test MyRestaurantMenu 30 days for free",
                "bullets": {
                    "01": "During your 30-day test phase, we will create a sample app for you. This includes a small taste of your menu. You keep the reins in your hands and can complete the content as you wish using our simple modular system."
                },
                "buttons": {
                    "01": {
                        "content": "Start trial for free now",
                        "cssClass": "btn-solid-light btn-inner-shadow",
                        "to": "demo"
                    },
                },
                "image": {
                    "src": ImgQrCode,
                    "alt": "Description",
                    "width": 300,
                    "height": 300,
                }
            }
        ]
    };
    const SectionCarouselText03 = {
        "title": "Quick implementation in just 3 steps",
        "content": [
            {
                "title": "01. Onboarding",
                "content": {
                    "01": "Briefly introduce your company.",
                    "02": "Initial consultation at the time of your choice",
                    "03": "Personalized support",
                    "04": "Discussion of individual wishes",
                    "05": "No previous experience required",
                }
            },
            {
                "title": "02. Creation",
                "content": {
                    "01": "Briefly introduce your company.",
                    "02": "Initial consultation at the time of your choice",
                    "03": "Personalized support",
                    "04": "Discussion of individual wishes",
                    "05": "No previous experience required",
                }
            },
            {
                "title": "03. Deployment",
                "content": {
                    "01": "Briefly introduce your company.",
                    "02": "Initial consultation at the time of your choice",
                    "03": "Personalized support",
                    "04": "Discussion of individual wishes",
                    "05": "No previous experience required",
                }
            },
        ],
        "cssClass": "section-carousel-bullet-icon"
    };
    const SectionFaq = {
        "text": {
            "title": "FAQ",
            "paragraph": "You can either fill a formular so we come back to you with a tailored service for your requirements. Or you can direct call or contact our founder."
        },
        "buttons": [
            {
                text: "Chat live with Diego's assistant",
                cssClass: "btn-solid-red",
                action: "openChat"
            }
        ],
        "faqs": [
            {
                question: 'How long does it take until my digital menu is ready?',
                answer: 'Once we receive your menu details and branding assets (logo, colors, images), your digital menu is usually ready within 3–5 business days. We make sure it works seamlessly before handing it over to you.'
            },
            {
                question: 'What does a responsive web app mean?',
                answer: 'Responsive means your digital menu automatically adapts to any device — mobile phones, tablets, or desktop screens. Guests will have a smooth experience without needing to download an app.'
            },
            {
                question: 'What design changes are possible?',
                answer: 'We customize colors, fonts, and layouts to match your restaurant’s branding. You can also add photos, highlight popular dishes, and update your menu items anytime. If you need advanced customization, our team can support you.'
            },
            {
                question: 'What can I expect during the first 30 days?',
                answer: 'You can fully test the platform free of charge for 30 days. This includes uploading your real menu, checking how guests interact, and requesting design tweaks. No risk, no commitment — we want you to be 100% confident before continuing.'
            },
            {
                question: 'Can I update my menu by myself?',
                answer: 'Yes! You’ll have access to a simple admin dashboard where you can edit items, prices, or photos instantly. No technical skills required.'
            },
            {
                question: 'Do my guests need to download an app?',
                answer: 'No downloads are needed. Your menu is accessible through a QR code or a direct link, so guests can open it instantly in their browser.'
            },
            {
                question: 'Is customer support included?',
                answer: 'Absolutely. We provide dedicated support via email, phone, or live chat. Most requests are resolved within 24 hours.'
            },
            {
                question: 'How secure is the platform?',
                answer: 'Your data and your guests’ data are protected with industry-standard security protocols. We also provide regular updates and monitoring to ensure reliability.'
            }
        ]
    }

    return (
        <div className="page page-home">
            <ComponentHero text={SectionHero.text} slides={SectionHero.slides} buttons={SectionHero.buttons} />
            <ComponentCards cardsData={SectionCardsFeatures01.cardsData} />
            <ComponentCards text={SectionIndustries.text} cardsData={SectionIndustries.cardsData} cssClass={SectionIndustries.cssClass} />
            <ComponentTabs title={SectionSingleTab.title} tabs={SectionSingleTab.tabs} tabsContent={SectionSingleTab.tabsContent} />
            <ComponentCards cardsData={SectionCardsFeatures02.cardsData} />
            <ComponentTabs tabs={SectionMultiTabs.tabs} tabsContent={SectionMultiTabs.tabsContent} cssClass={SectionMultiTabs.cssClass} backgroundOverflow={SectionMultiTabs.backgroundOverflow} />
            <ComponentCarouselText title={SectionCarouselText01.title} content={SectionCarouselText01.content} cssClass={SectionCarouselText01.cssClass} />
            <ComponentContactCTA cssClass={"section-overflow-background"} backgroundOverflow={"background-red-200"}/>
            <ComponentCarouselText title={SectionCarouselText02.title} content={SectionCarouselText02.content} />
            <ComponentTabs tabs={SectionSingleTabRed.tabs} tabsContent={SectionSingleTabRed.tabsContent} cssClass={SectionSingleTabRed.cssClass}/>
            <ComponentCarouselText title={SectionCarouselText03.title} content={SectionCarouselText03.content} cssClass={SectionCarouselText03.cssClass} />
            <ComponentFaq text={SectionFaq.text} buttons={SectionFaq.buttons} faqs={SectionFaq.faqs} />
            <ComponentContactCTA />
        </div>
    )
}

export default Home