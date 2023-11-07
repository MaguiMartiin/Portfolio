import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_URL_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_URL_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_URL_USER_ID

function ContactForm() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    user_name: formData.user_name,
                    from_email: formData.user_email,
                    message: formData.message
                },
                USER_ID
            );
            alert('Correo electrónico enviado exitosamente!');
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
        }
    };

    return (
        <div id='contact' className='flex justify-center mt-[7rem] '>     
            <form onSubmit={handleSubmit} className='flex flex-col justify-center font-primary w-[30%] text-blue-900 items-center max-[450px]:mb-[28rem]'>
                <label htmlFor="name" className=''>Nombre </label>
                <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange}/><br />

                <label htmlFor="email">Correo Electrónico </label>
                <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} required /><br />

                <label htmlFor="message">Mensaje </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" cols="50" required></textarea><br />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactForm;
