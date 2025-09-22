// Import styles and libraries
import '../../styles/com-se.contactcta.scss';
// import { useTranslation } from 'react-i18next';

const ContactCTA = () => {
    // States for translations
    // const { t } = useTranslation();

    return (
        <section className='section secion-contact-cta'>
            <div className='text-container'>
                <h4 className='title'>Do you have any more questions?</h4>
                <p className='font-normal'>You can fill out our quick form and we’ll get back to you with a tailored solution.</p>
                <p>Prefer a direct conversation? Call or reach out to our founder personally.</p>
                <button className='btn-solid-light btn-inner-shadow' >Fill out the form here</button>
                <p className='font-smaller'>We’ll contact you within 24 hours</p>
            </div>
            <div className='image-contact-info-container'>
                <img src='' alt='' />
                <div className='text-container'>
                    <p className='font-bold'>Diego Pérez</p>
                    <p className='font-smaller'>Founder of <span className='font-red font-bold'>MyRestaurantMenu</span></p>
                    <p className='font-normal'>+49 0176 62 67 69 49</p>
                    <p className='font-smaller'>Mon-Fri. 09:00 - 17:00</p>
                    <p className='font-normal'>contact@myrestaurantapp.com</p>
                    <button className='btn-solid-red' >Chat live with Diego’s assistant</button>
                </div>
            </div>
        </section>
    )
}

export default ContactCTA