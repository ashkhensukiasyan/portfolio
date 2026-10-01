import { useState } from "react";
import "../Contact.css";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [sent, setSent] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/mqpajvnv", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (response.ok) {
                setSent(true);
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                alert("Ինչ-որ սխալ եղավ, փորձիր կրկին:");
            }
        } catch (error) {
            alert("Ցանցային սխալ:");
        }
    };

    return (
        <section id="contact" className="contact">
            <h2>Կապվեք ինձ հետ</h2>

            {sent && <p style={{ color: "green" }}>✅ Հաղորդագրությունն ուղարկվեց!</p>}

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Անուն"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Էլ․ հասցե"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Թեմա"
                    value={form.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Հաղորդագրություն և հետադարձ կապի համար հեռախոսահամար"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Ուղարկել</button>
            </form>
        </section>
    );
};

export default Contact;