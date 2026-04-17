import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function validate() {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email is invalid";
        }

        if (form.message.length <10) {
            newErrors.message = "Message is too short";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("Form submitted:", form);
        setForm({ name: "", email: "", message: "" });
        setErrors({});
        alert("Thank you for your message!");
    }

    return (
        <div className="max-w-2xl mx-auto px-6 py-10">
            <h1 className="text-3xl mb-8">Contact</h1>

            <p className="text-gray-600 mb-8">
                If you are interested in a work or collaboration,
                feel free to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full p-2 border ${errors.message ? "border-red-500" : "border-gray-300"} h-32`}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                <button className="bg-black text-white px-4 py-2">
                    Send
                </button>
            </form>
        </div>
    );
}