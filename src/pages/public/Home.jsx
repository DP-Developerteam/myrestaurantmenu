// Import styles and libraries
import '../../App.scss';
// Import components
import SectionHero from '../../components/sections/Hero';
import SectionCards from '../../components/sections/Cards';
import Tabs from '../../components/sections/Tabs';
import SectionCarouselText from '../../components/sections/CarouselText';
// Import icons & images
import SliderHero01 from '../../assets/img/qr-code.webp';

const Home = () => {

    const SectionCardsFeatures01 = {
        'cardsData': [
            {
                'id': 1,
                'isOnClick': true,
                'text': 'Flip card',
                'image': SliderHero01,
                'description': 'Este es un texto de descripción que aparece al hacer clic.',
            },
            {
                'id': 2,
                'isOnClick': true,
                'text': 'Expand card',
                'image': SliderHero01,
                'description': 'Este es un texto de descripción que aparece al hacer clic.',
            },
            {
                'id': 3,
                'isOnClick': true,
                'text': 'Static card 1',
                'image': SliderHero01,
                'description': 'Description'
            },
            {
                'id': 4,
                'isOnClick': true,
                'text': 'Static card 2',
                'image': SliderHero01,
            },
            {
                'id': 5,
                'isOnClick': true,
                'text': 'Static card 3',
                'image': SliderHero01,
            },
            {
                'id': 6,
                'isOnClick': true,
                'text': 'Static card 4',
                'image': SliderHero01,
            },
            {
                'id': 7,
                'cssClass': 'card-red',
                'isOnClick': true,
                'text': 'Static card RED',
                'image': SliderHero01,
                'description': 'Description'
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
                'text': 'Flip card',
                'image': SliderHero01,
                'description': 'Este es un texto de descripción que aparece al hacer clic.',
            },
            {
                'id': 2,
                'isOnClick': true,
                'text': 'Expand card',
                'image': SliderHero01,
                'description': 'Este es un texto de descripción que aparece al hacer clic.',
            },
            {
                'id': 3,
                'isOnClick': true,
                'text': 'Static card 1',
                'image': SliderHero01,
                'description': 'Description'
            },
            {
                'id': 4,
                'isOnClick': true,
                'text': 'Static card 2',
                'image': SliderHero01,
            },
        ],
        'cssClass': 'section-red-4-cards'
    };
    const SectionSingleTab = {
        'title': "What an experience",
        'tabs': false,
        'tabsContent': [
            {
                'bullets': {
                    '01': 'Display products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

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
                'text': 'Flip card',
                'image': SliderHero01,
                'description': 'Este es un texto de descripción que aparece al hacer clic.',
            },
            {
                'id': 2,
                'isOnClick': true,
                'text': 'Expand card',
                'image': SliderHero01,
                'description': 'Este es un texto de descripción que aparece al hacer clic.',
            },
            {
                'id': 3,
                'isOnClick': true,
                'text': 'Static card 1',
                'image': SliderHero01,
                'description': 'Description'
            },
            {
                'id': 4,
                'isOnClick': true,
                'text': 'Static card 1',
                'image': SliderHero01,
                'description': 'Description'
            },
        ]
    };
    const SectionMultiTabs = {
        'tabs': true,
        'tabsContent': [
            {
                'title': 'Clients CMS',
                'bullets': {
                    '01': 'Display products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

                },
                'image': {
                    'src': SliderHero01,
                    'alt': 'Description',
                    'width': 300,
                    'height': 300,
                }
            },
            {
                'title': 'Manager CMS',
                'bullets': {
                    '01': 'MANAGER products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

                },
                'image': {
                    'src': SliderHero01,
                    'alt': 'Description',
                    'width': 300,
                    'height': 300,
                }
            },
            {
                'title': 'Customization',
                'bullets': {
                    '01': 'Customization products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

                },
                'image': {
                    'src': SliderHero01,
                    'alt': 'Description',
                    'width': 300,
                    'height': 300,
                }
            },
            {
                'title': 'Syncronization',
                'bullets': {
                    '01': 'Syncronization products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

                },
                'image': {
                    'src': SliderHero01,
                    'alt': 'Description',
                    'width': 300,
                    'height': 300,
                }
            },
            {
                'title': 'Push notifications',
                'bullets': {
                    '01': 'Display products with Photos, videos, or lists — your menu adapts to every customer.',
                    '02': 'Smart display adapts to internet speed. Enhancing user experience assuring a smooth experience.',
                    '03': 'Built-in marketing tools turn clicks into real orders.',
                    '04': 'From daily specials to holiday favorites, everything is flexible, immediate, and built to sell.',
                    '05': 'Built-in marketing tools turn clicks into real orders.'

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