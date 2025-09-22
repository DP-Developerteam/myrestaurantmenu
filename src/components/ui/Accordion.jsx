// Import styles and libraries
import '../../styles/com-ui.accordion.scss';
import { useState, useRef } from 'react';
// Import icons & images
import { IconArrow } from './Icons';

const Accordion = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const timeoutRef = useRef(null);

    const handleClick = () => {
        if (isDisabled) return;

        setIsOpen(!isOpen);
        setIsDisabled(true);

        // allow clicks again after 300ms
        timeoutRef.current = setTimeout(() => {
            setIsDisabled(false);
        }, 600);
    };


    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <button
                className="accordion-header"
                onClick={handleClick}
                aria-expanded={isOpen}
            >
                <p className='font-bold'>{question}</p>
                <IconArrow className={`icon ${isOpen ? 'rotated' : ''}`} />
            </button>

            {isOpen && (
                <div className="accordion-body">
                    <p className='font-normal'>{answer}</p>
                </div>
            )}
        </div>
    )
}

export default Accordion