//Import styles and libraries
import '../../styles/com-la.footer.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Import icons & images
import LogoSymbol from '../../assets/img/logo-symbol.svg';

const Footer = () => {
    // States for translations
    const { t } = useTranslation();

    // Render company links
    const RenderCompanyLinks = () => {
        return (
            <div className='nav-group'>
                <p className='font-bold'>Company</p>
                <div className='nav-links'>
                    <NavLink className='tab' to='/'>{t('nav.about')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.contact')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.status')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.partners')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.privacy')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.legal')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.cookies')}</NavLink>
                </div>
            </div>
        )
    }
    // Render ressources links
    const RenderRessourcesLinks = () => {
        return (
            <div className='nav-group'>
                <p className='font-bold'>Ressources</p>
                <div className='nav-links'>
                    <NavLink className='tab' to='/'>{t('nav.academy')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.faq')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.blog')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.sales')}</NavLink>
                </div>
            </div>
        )
    }
    // Render demos links
    const RenderDemosLinks = () => {
        return (
            <div className='nav-group'>
                <p className='font-bold'>Demos</p>
                <div className='nav-links'>
                    <NavLink className='tab' to='/'>{t('nav.demoPizza')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.smartMarket')}</NavLink>
                </div>
            </div>
        )
    }
    // Render services links
    const RenderServicesLinks = () => {
        return (
            <div className='nav-group'>
                <p className='font-bold'>Service</p>
                <div className='nav-links'>
                    <NavLink className='tab' to='/'>{t('nav.pricing')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.addsOn')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.features')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.qrCodes')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.signIn')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.signUp')}</NavLink>
                    <NavLink className='tab' to='/'>{t('nav.smartMarket')}</NavLink>
                </div>
            </div>
        )
    }

    return (
        <div className='footer' role='contentinfo'>
            <NavLink className='tab' to='/'>
                <img className='logo' src={LogoSymbol} alt='logo My Restaurant Menu App' title='My Restaurant Menu logo in color red' width='' height='' />
            </NavLink>
            <div className='nav-container'>
                {RenderCompanyLinks()}
                {RenderRessourcesLinks()}
                {RenderDemosLinks()}
                {RenderServicesLinks()}
            </div>
        </div>
    )
}

export default Footer