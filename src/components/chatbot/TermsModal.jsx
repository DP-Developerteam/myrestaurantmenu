// Import styles and libraries


const TermsModal = ({ onAccept, onDecline }) => {
    return (
        <div className="chatbox-terms">
            <p>
                Please accept our{" "}
                <a href="/terms" className="font-bold font-red">
                Terms of Use
                </a>{" "}
                to continue.
            </p>
            <button
                className="btn-solid-red btn-full-width"
                onClick={onAccept}
            >
                Accept
            </button>
            <button
                className="btn-solid-dark btn-full-width"
                onClick={onDecline}
            >
                Decline
            </button>
        </div>
    )
}

export default TermsModal