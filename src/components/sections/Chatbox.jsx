// Import styles and libraries
import '../../styles/com-se.chatbox.scss';
// Import components
import ChatPanel from '../chatbot/ChatPanel';
import { useState } from 'react';
// Images and icons
import ImgContactCta from '../../assets/img/contact-cta.webp';


const Chatbox = () => {
    const [panelInitialForm, setPanelInitialForm] = useState(null);
    const [panelInitialPrefill, setPanelInitialPrefill] = useState({});
    const [panelToken, setPanelToken] = useState(0);

    function openFormInPanel(formId, prefill = {}) {
        setPanelInitialForm(formId);
        setPanelInitialPrefill(prefill);
        // bump token so ChatPanel re-triggers even if same formId is used twice
        setPanelToken((s) => s + 1);
    }

    return (
        <section className='section section-chatbox'>
            <div className='intro-container'>
                <img src={ImgContactCta} alt='phone illustration' aria-hidden='true' />
                <div className='text-container'>
                    <h2 className='title'>Title</h2>
                    <p className='description'>description Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, error consectetur saepe tenetur obcaecati delectus.</p>
                </div>
                <div className='buttons-container'>
                    <button className='btn-solid-red' onClick={() => openFormInPanel('lead')}>Boton lead</button>
                    <button className='btn-solid-red' onClick={() => openFormInPanel('trial')}>Boton trial</button>
                    <button className='btn-solid-red' onClick={() => openFormInPanel('register')}>Boton register</button>
                    <button className='btn-solid-red' onClick={() => openFormInPanel('issue')}>Boton issue</button>
                </div>
            </div>
            <div className='chatbox-container'>
                <ChatPanel
                    initialForm={panelInitialForm}
                    initialPrefill={panelInitialPrefill}
                    initialFormToken={panelToken}
                />
            </div>
        </section>
    )
}

export default Chatbox