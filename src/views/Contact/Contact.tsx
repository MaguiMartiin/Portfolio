import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

const SERVICE_ID: string = import.meta.env.VITE_URL_SERVICE_ID;
const TEMPLATE_ID: string = import.meta.env.VITE_URL_TEMPLATE_ID;
const USER_ID: string = import.meta.env.VITE_URL_USER_ID;

const Contact: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                user_name: formData.user_name,
                user_email: formData.user_email,
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
    <div id='contact' className='flex flex-col justify-center p-[7rem] '>
      <div className='flex justify-center'>
        <h1 className='font-primary text-4xl gradient-text'>CONTACTO</h1>
      </div>

      <div className='flex mt-[4rem]'>
        <div className='flex-col flex w-full'>
          <div>
            <h1>Hola</h1>
          </div>

          <div>
            <h1>Hola</h1>
          </div>
        </div>

        <div className='flex-col flex w-full'>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center font-primary text-blue-900 max-[450px]:mb-[28rem]'>
            <div className='p-[1rem] flex flex-col bg-slate-400 mb-[1rem] rounded-xl'>
                <label htmlFor='name' className='mb-[0.5rem]'>Nombre </label>
                <input type='text' id='user_name' name='user_name' value={formData.user_name} placeholder='Inserta tu nombre' onChange={handleChange} className='bg-slate-400 placeholder:text-white font-secondary' />
            </div>

            <div className='p-[1rem] flex flex-col bg-slate-400 mb-[1rem] rounded-xl'>
                <label htmlFor='email' className='mb-[0.5rem]'>Correo Electrónico </label>
                <input type='email' id='user_email' name='user_email' value={formData.user_email} placeholder='Inserta tu email' onChange={handleChange} required className='bg-slate-400 placeholder:text-white font-secondary'/>
            </div>

            <div className='p-[1rem] flex flex-col bg-slate-400 mb-[1rem] rounded-xl'>
                <label htmlFor='message' className='mb-[0.5rem]'>Mensaje </label>
                <textarea id='message' name='message' value={formData.message} placeholder='Dejá tu mensaje' onChange={handleChange} rows={4} cols={50} required className='bg-slate-400 placeholder:text-white font-secondary'></textarea>
            </div>
            
            <div className=' flex justify-center'>  
                <button type='submit' className='bg-blue-900 mt-[1rem] w-fit p-[0.8rem] rounded-xl text-xl font-secondary text-white'>Enviar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
