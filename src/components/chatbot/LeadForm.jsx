import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LeadForm({ onSubmit, onCancel }) {
    const { t } = useTranslation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!email && !phone) {
            alert(t("chatbot.leadForm.requireContact"));
        return;
        }
        onSubmit({ name, email, phone });
    }

    return (
        <form className="lead-form message" onSubmit={handleSubmit}>
            <label>{t("chatbot.leadForm.name")}</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t("chatbot.leadForm.name")}/>
            <label>{t("chatbot.leadForm.email")}</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("chatbot.leadForm.email")}/>
            <label>{t("chatbot.leadForm.phone")}</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t("chatbot.leadForm.phone")}/>
            <div className="buttons-container">
                <button className="btn-solid-red" type="submit">{t("chatbot.leadForm.submit")}</button>
                <button className="btn-solid-dark" type="button" onClick={onCancel}>{t("chatbot.leadForm.cancel")}</button>
            </div>
        </form>
    );
}
