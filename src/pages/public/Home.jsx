// Import styles and libraries
import '../../App.scss';
// Import components
import SectionHero from '../../components/sections/Hero';
import SectionCards from '../../components/sections/Cards';
import Tabs from '../../components/sections/Tabs';
import SectionCarouselText from '../../components/sections/CarouselText';
// Import icons & images
import ImgCommission from '../../assets/img/commission.webp';
import ImgGiftCart from '../../assets/img/gift-card.webp';
import ImgMultilingual from '../../assets/img/multilingual.webp';
import SliderHero01 from '../../assets/img/qr-code.webp';
import ImgResponsive from '../../assets/img/responsive.webp';
import ImgUxResponsive from '../../assets/img/ux-friendly.webp';
import IconChains from '../../assets/img/icon-chains.svg';
import IconGastro from '../../assets/img/icon-gastro-market.svg';
import IconHotels from '../../assets/img/icon-hotels.svg';
import IconRestaurant from '../../assets/img/icon-restaurant.svg';
import ImgDataOwnership from '../../assets/img/data-ownership.webp';
import ImgAbTesting from '../../assets/img/ab-testing.webp';
import ImgCustomization from '../../assets/img/customization.webp';
import ImgTableTurnOver from '../../assets/img/table-turnover.webp';


const Home = () => {

    const SectionCardsFeatures01 = {
        'cardsData': [
            {
            'id': 1,
            'isOnClick': true,
            'text': 'QR Code Menu',
            'image': SliderHero01,
            'description': 'Share your menu instantly with a simple QR scan. Customers can browse without downloading any app.',
            },
            {
            'id': 2,
            'isOnClick': true,
            'text': 'Tablet Ready',
            'image': ImgResponsive,
            'description': 'Designed to work seamlessly on tablets. Give your staff an easy, modern tool to manage orders.',
            },
            {
            'id': 3,
            'isOnClick': true,
            'text': 'Gift & Stamp Cards',
            'image': ImgGiftCart,
            'description': 'Reward loyal customers with digital gift and stamp cards. Easy to use and eco-friendly.',
            },
            {
            'id': 4,
            'isOnClick': true,
            'text': 'Marketing Tools',
            'image': ImgUxResponsive,
            'description': 'Promote your business with built-in campaigns and offers. Reach more customers effortlessly.',
            },
            {
            'id': 5,
            'isOnClick': true,
            'text': 'Multilingual',
            'image': ImgMultilingual,
            'description': 'Offer menus in multiple languages. Make every guest feel at home with inclusive communication.',
            },
            {
            'id': 6,
            'cssClass': 'card-red',
            'isOnClick': true,
            'text': '0% Commission',
            'image': ImgCommission,
            'description': 'Keep 100% of your earnings. No hidden fees, no commission on your sales.',
            },
        ]
    };
    const SectionIndustries = {
        'text': {
            'title': 'We work with companies like yours',
        },
        'cardsData': [
            {
                'id': 1,
                'isOnClick': true,
                'text': 'Gastro Market',
                'image': IconGastro,
                'description': 'Make menus of all restaurants for your market to be in one QR code.',
                'cssClass': 'card-red-faded',
            },
            {
                'id': 2,
                'isOnClick': true,
                'text': 'Hotels',
                'image': IconHotels,
                'description': 'Make your menu ready in the language of your guests as soon as they scan the QR code.',
                'cssClass': 'card-red-faded',
            },
            {
                'id': 3,
                'isOnClick': true,
                'text': 'Restaurants',
                'image': IconRestaurant,
                'description': 'Leverage your status providing a digital professional service.',
                'cssClass': 'card-red-faded',
            },
            {
                'id': 4,
                'isOnClick': true,
                'text': 'Chains',
                'image': IconChains,
                'description': 'Never before was so easy to create and maintain menus across different locations.',
                'cssClass': 'card-red-faded',
            },
        ],
        'cssClass': 'section-red-4-cards section-cards-icon'
    };
    const SectionSingleTab = {
        'title': "A Dining Experience They'll Remember",
        'tabs': false,
        'tabsContent': [
            {
                'bullets': {
                    '01': 'Flawless Viewing, Anywhere: Our adaptive display guarantees a fast, beautiful menu on any device and any connection.',
                    '02': 'Instant Access: Customers scan the QR code and the menu opens instantly in their browser. No app download required.',
                    '03': 'Engage & Interact: Let diners "like" their favorite dishes, providing you with valuable feedback while making them feel connected.',
                    '04': 'Always Accurate: Show real-time availability and pricing, eliminating customer frustration and confusion.',
                },
                'buttons': {
                    '01': {
                        'content': 'Check the live demo now',
                        'cssClass': 'btn-solid-light btn-inner-shadow',
                        'to': 'demo'
                    },
                    '02': {
                        'content': 'Start trial for free',
                        'cssClass': 'btn-solid-red',
                        'to': 'promo'
                    }
                },
                'image': {
                    'src': SliderHero01,
                    'alt': 'Description',
                    'width': 300,
                    'height': 300,
                }
            }
        ]
    };
    const SectionCardsFeatures02 = {
        'cardsData': [
            {
                'id': 1,
                'isOnClick': true,
                'text': 'Data ownership',
                'image': ImgDataOwnership,
                'description': 'Este es un texto de descripción que aparece al hacer clic.',
            },
            {
                'id': 2,
                'isOnClick': true,
                'text': 'A / B testing',
                'image': ImgAbTesting,
                'description': 'Este es un texto de descripción que aparece al hacer clic.',
            },
            {
                'id': 3,
                'isOnClick': true,
                'text': 'Customization',
                'image': ImgCustomization,
                'description': 'Description'
            },
            {
                'id': 4,
                'isOnClick': true,
                'text': 'Table turnover',
                'image': ImgTableTurnOver,
                'description': 'Description'
            },
        ]
    };
    const SectionMultiTabs = {
        'tabs': true,
        'tabsContent': [
            {
                'title': 'Effortless Management',
                'bullets': {
                    '01': 'An intuitive CMS that feels like using your favorite social media app. No technical skills needed.',
                    '02': 'Create, edit, and organize categories and menu items with a simple drag-and-drop interface.',
                    '03': 'Schedule menus to appear at specific times of day (e.g., breakfast, lunch, dinner).',
                    '04': 'Visually highlight promotions, new items, or chef\'s recommendations to drive sales.',
                },
                'image': {
                    'src': SliderHero01, // Use screenshot of the manager CMS
                    'alt': 'Restaurant menu management dashboard',
                }
            },
            {
                'title': 'Powerful Customization',
                'bullets': {
                    '01': 'Match the menu to your brand with custom colors, fonts, and your restaurant\'s logo.',
                    '02': 'Choose from multiple layouts to best present your food and drinks.',
                    '03': 'Add allergen information, dietary tags (vegan, gluten-free), and calorie counts easily.',
                    '04': 'Create a consistent brand experience from the moment your customer sits down.',
                },
                'image': {
                    'src': SliderHero01, // Use screenshot of customization options
                    'alt': 'Customizing a digital menu',
                }
            },
            {
                'title': 'Loyalty & Engagement',
                'bullets': {
                    '01': 'Offer digital loyalty cards to encourage repeat business. "Buy 5 coffees, get the 6th free!"',
                    '02': 'Sell digital gift cards directly through your menu—a perfect revenue booster.',
                    '03': 'Allow customers to create profiles to save their favorite items and track loyalty rewards.',
                    '04': 'Gather direct feedback and build a community around your brand.',
                },
                'image': {
                    'src': SliderHero01, // Use image showing the loyalty card feature
                    'alt': 'Digital loyalty card on a phone',
                }
            },
        ]
    };
    const SectionCarouselText01 = {
        'title': 'The Benefits at a Glance',
        'content': [
            {
                'title': 'Benefits for your clients',
                'content': {
                    '01': 'No wait – browse and order instantly',
                    '02': 'Easy access via QR code – no app download needed',
                    '03': 'Always up-to-date info (availability, prices)',
                    '04': 'View in multiple formats (photo, video, list)',
                    '05': 'Multi-language, multi-currency options',
                    '06': 'Nutrition and allergy info at a glance',
                    '07': 'Fast, hygienic, and contactless experience',
                    '08': 'Leave feedback instantly',
                }
            },
            {
                'title': 'Benefits for your business',
                'content': {
                    '01': 'Reduce staff workload and increase efficiency',
                    '02': 'Real-time menu updates (no reprints needed)',
                    '03': 'Promote offers, specials, or seasonal dishes easily',
                    '04': 'Increase sales with flash offers & marketing tools',
                    '05': 'Reach tourists and international guests seamlessly',
                    '06': 'Build trust with transparency and compliance',
                    '07': 'Save costs on printing and reduce environmental waste',
                    '08': 'Collect guest reviews and improve your service',
                }
            },
            {
                'title': 'Benefits for your employees',
                'content': {
                    '01': 'Less time explaining menu items to customers',
                    '02': 'Reduced order errors and miscommunication',
                    '03': 'More time to focus on service quality',
                    '04': 'Easy menu management through simple interface',
                    '05': 'Instant notifications for new orders',
                    '06': 'Real-time inventory tracking',
                    '07': 'Streamlined workflow and operations',
                    '08': 'Enhanced customer satisfaction scores',
                }
            },
            {
                'title': 'Technical advantages',
                'content': {
                    '01': 'Cloud-based system with 99.9% uptime guarantee',
                    '02': 'Mobile-responsive design for all devices',
                    '03': 'Advanced analytics and reporting tools',
                    '04': 'Integration with existing POS systems',
                    '05': 'Secure payment processing and data protection',
                    '06': 'Automatic backups and disaster recovery',
                    '07': 'Regular updates and new feature rollouts',
                    '08': '24/7 technical support and maintenance',
                }
            }
        ]
    };
    const SectionCarouselText02 = {
        'title': 'Hear what our clients says about MyRestaurantMenu',
        'content': [
            {
                'title': '1 Name of the business owner',
                'content': {
                    '01': 'Review of the business owner. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                }
            },
            {
                'title': '2 Name of the business owner',
                'content': {
                    '02': 'Review of the business owner. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                }
            },
            {
                'title': '3 Name of the business owner',
                'content': {
                    '03': 'Review of the business owner. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                }
            },
            {
                'title': '4 Name of the business owner',
                'content': {
                    '04': 'Review of the business owner. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                }
            },
        ]
    };
    const SectionSingleTabRed = {
        'tabs': false,
        'cssClass': 'section-tab-red',
        'tabsContent': [
            {
                'title': 'Test MyRestaurantMenu 30 days for free',
                'bullets': {
                    '01': 'During your 30-day test phase, we will create a sample app for you. This includes a small taste of your menu. You keep the reins in your hands and can complete the content as you wish using our simple modular system.'
                },
                'buttons': {
                    '01': {
                        'content': 'Start trial for free now',
                        'cssClass': 'btn-solid-light btn-inner-shadow',
                        'to': 'demo'
                    },
                },
                'image': {
                    'src': SliderHero01,
                    'alt': 'Description',
                    'width': 300,
                    'height': 300,
                }
            }
        ]
    };
    const SectionCarouselText03 = {
        'title': 'Quick implementation in just 3 steps',
        'content': [
            {
                'title': '01. Onboarding',
                'content': {
                    '01': '- Briefly introduce your company.',
                    '02': '- Initial consultation at the time of your choice',
                    '03': '- Personalized support',
                    '04': '- Discussion of individual wishes',
                    '05': '- No previous experience required',
                }
            },
            {
                'title': '02. Creation',
                'content': {
                    '01': '- Briefly introduce your company.',
                    '02': '- Initial consultation at the time of your choice',
                    '03': '- Personalized support',
                    '04': '- Discussion of individual wishes',
                    '05': '- No previous experience required',
                }
            },
            {
                'title': '03. Deployment',
                'content': {
                    '01': '- Briefly introduce your company.',
                    '02': '- Initial consultation at the time of your choice',
                    '03': '- Personalized support',
                    '04': '- Discussion of individual wishes',
                    '05': '- No previous experience required',
                }
            },
        ]
    };

    return (
        <div className='page page-home'>
            <SectionHero />
            <SectionCards cardsData={SectionCardsFeatures01.cardsData} />
            <SectionCards text={SectionIndustries.text} cardsData={SectionIndustries.cardsData} cssClass={SectionIndustries.cssClass} />
            <Tabs title={SectionSingleTab.title} tabs={SectionSingleTab.tabs} tabsContent={SectionSingleTab.tabsContent} />
            <SectionCards cardsData={SectionCardsFeatures02.cardsData} />
            <Tabs tabs={SectionMultiTabs.tabs} tabsContent={SectionMultiTabs.tabsContent} />
            <SectionCarouselText title={SectionCarouselText01.title} content={SectionCarouselText01.content} />
            <SectionCarouselText title={SectionCarouselText02.title} content={SectionCarouselText02.content} />
            <Tabs tabs={SectionSingleTabRed.tabs} tabsContent={SectionSingleTabRed.tabsContent} cssClass={SectionSingleTabRed.cssClass}/>
            <SectionCarouselText title={SectionCarouselText03.title} content={SectionCarouselText03.content} />
        </div>
    )
}

export default Home