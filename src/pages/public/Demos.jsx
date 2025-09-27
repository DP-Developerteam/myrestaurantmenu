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
import ImgContactCta from '../../assets/img/contact-cta.webp';
import ImgCalendar from "../../assets/img/calendar.png";
import ImgHero01 from "../../assets/img/hero-01.jpg";
import ImgHero02 from "../../assets/img/hero-03.jpg";


const Demos = () => {

    const SectionHero = {
        "text": {
            "intro": "section.hero.demos.intro",
            "title": "section.hero.demos.title",
            "subtitle": "section.hero.demos.subtitle",
            "bullets": [
                "section.hero.common.bullets.interactive",
                "section.hero.common.bullets.multilanguage",
                "section.hero.common.bullets.switchMode",
                "section.hero.common.bullets.addsOn",
                "section.hero.common.bullets.loading",
            ]
        },
        "slides": [
            {
                image: ImgHero01,
                alt: "DEMO for the menu of a Pizzeria restaurant",
                text: "Visit the demo for the menu of a Pizzeria restaurant",
                cta: "ui.buttons.demoPiza",
                link: "/",
                width: 834,
                height: 450,
            },
            {
                image: ImgHero02,
                alt: "DEMO for the menu of a food market place",
                text: "Visit the demo for the menu of a food market place",
                cta: "ui.buttons.demoMarket",
                link: "/contact",
                width: 834,
                height: 450,
            }
        ],
        "buttons": [
            {
                text: "ui.buttons.demoPiza",
                cssClass: "btn-solid-red btn-hover-gradient-red",
                onClick: "openChat",
            },
            {
                text: "ui.buttons.demoMarket",
                cssClass: "btn-solid-red btn-hover-gradient-red",
                onClick: "openChat",
            }
        ]
    }

    const SectionFaq = {
        "text": {
            "title": "FAQ",
            "paragraph": "You can either fill a formular so we come back to you with a tailored service for your requirements. Or you can direct call or contact our founder."
        },
        "buttons": [
            {
                text: "Chat live with Diego's assistant",
                cssClass: "btn-solid-red",
                onClick: "openChat",
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
    };
    const SectionContactCta01 = {
        "text": {
            "title": "Do you have any more questions?",
            "paragraph": "You can fill out our quick form and we’ll get back to you with a tailored solution. Prefer a direct conversation? Call or reach out to our founder personally.",
        },
        "buttons": {
            "text": "Fill out the form here",
            "to": "contact"
        },
        "image": {
            image: ImgContactCta,
            alt: "Delicious pizza",
            text: "Try our new Margherita",
            cta: "Contact us now!",
            link: "/contact",
            width: 834,
            height: 450,
        }
    };
    const SectionTest30Days = {
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
                    "src": ImgCalendar,
                    "alt": "Description",
                    "width": 300,
                    "height": 300,
                }
            }
        ]
    };

    return (
        <div className='page page-demos'>
            <ComponentHero text={SectionHero.text} slides={SectionHero.slides} buttons={SectionHero.buttons} />
            <ComponentTabs tabs={SectionTest30Days.tabs} tabsContent={SectionTest30Days.tabsContent} cssClass={SectionTest30Days.cssClass}/>
            <ComponentFaq text={SectionFaq.text} buttons={SectionFaq.buttons} faqs={SectionFaq.faqs} />
            <ComponentContactCTA text={SectionContactCta01.text} buttons={SectionContactCta01.buttons} image={SectionContactCta01.image} />
        </div>
    )
}

export default Demos