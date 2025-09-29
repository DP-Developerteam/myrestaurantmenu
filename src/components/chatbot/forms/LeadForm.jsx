import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LeadForm({ onSubmit, onCancel, prefill = {} }) {
    const { t } = useTranslation();

    const [name, setName] = useState(prefill.name || "");
    const [email, setEmail] = useState(prefill.email || "");
    const [phone, setPhone] = useState(prefill.phone || "");

    const firstFieldRef = useRef(null);

    useEffect(() => {
    if (firstFieldRef.current) {
        firstFieldRef.current.focus();
    }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (!email && !phone) {
            alert(t("forms.requireContact"));
        return;
        }
        onSubmit({ name, email, phone });
    }

    return (
        <form className="lead-form message" onSubmit={handleSubmit}>
            <label>{t("forms.nameLabel")}</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t("forms.namePlaceholder")} ref={firstFieldRef} />
            <label>{t("forms.emailLabel")}</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("forms.emailPlaceholder")} />
            <label>{t("forms.phoneLabel")}</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t("forms.phonePlaceholder")} />
            <div className="buttons-container">
                <button className="btn-solid-red" type="submit">{t("forms.submit")}</button>
                <button className="btn-solid-dark" type="button" onClick={onCancel}>{t("forms.cancel")}</button>
            </div>
        </form>
    );
}
