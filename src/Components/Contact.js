import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            emailjs.sendForm('service_vbfiu29', 'template_y5imutu', e.target, '_ngZb8A2g0sPGju4O')
                .then((result) => {
                    setName("");
                    setEmail("");
                    setMessage("");
                    alert("message send");
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            alert("Please fill all fields");
        }
    }

    return (
        <section className="section-7 padding" id='contact'>
            <div className="w-large lg:w-medium 2xl:w-custom container py-8">
                <h2 className="text-4xl font-bold">Contact</h2>
                <form className="flex flex-col mt-12" onSubmit={handleSubmit}>
                    <input name="name" value={name} onChange={(e) => setName(e.target.value)} className="px-6 py-3 rounded-md my-3 border-2 border-gray-300 outline-none focus:border-blue-500" type="text" placeholder="Your Name" />
                    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-6 py-3 rounded-md my-3 border-2 border-gray-300 outline-none focus:border-blue-500" type="email" placeholder="Your Email" />
                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="px-8 rounded-md my-3 border-2 border-gray-300 outline-none focus:border-blue-500" placeholder="Your Message" rows="8" cols="30"></textarea>
                    <input className="submit-btn" type="submit" value="Send Message" />
                </form>
            </div>
        </section>
    )
}

export default Contact;