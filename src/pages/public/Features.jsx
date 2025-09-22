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

const Features = () => {

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

    return (
        <div className='page page-home'>
            <Tabs tabs={SectionSingleTabRed.tabs} tabsContent={SectionSingleTabRed.tabsContent} cssClass={SectionSingleTabRed.cssClass}/>
            <SectionCards cardsData={SectionCardsFeatures01.cardsData} />
        </div>
    )
}

export default Features