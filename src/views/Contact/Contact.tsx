import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { FaWhatsapp } from 'react-icons/fa';

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
        <div className='flex-col flex w-full justify-center items-end mr-[6rem] mb-[4.5rem]'>
          <div className='flex flex-col w-[15rem] h-[10rem] rounded-lg shadow-lg text-center justify-center  bg-slate-400 text-white mb-[2rem]'>
            <div className='flex justify-center'>
            </div>
            <h1 className='font-primary mb-[1rem] text-blue-900 text-lg '>Email</h1>
            <h1 className='font-secondary text-sm'>magalimartin02@gmail.com</h1>
          </div>
          <div className='flex flex-col w-[15rem] h-[10rem] rounded-lg shadow-lg text-center justify-center  bg-slate-400 text-white'>
            <div className='flex justify-center '>
              <FaWhatsapp className='text-3xl' />
            </div>
            <h1 className='font-primary mb-[1rem] text-blue-900 text-lg'>Whatsapp</h1>
            <a href="https://api.whatsapp.com/send?phone=543492226051&text=%C2%A1Hola%21+Me+gustaría+recibir+más+información.+" target="_blank" className='font-secondary text-sm'>+54 3492 226051</a>
          </div>
        </div>

        <div className='flex-col flex w-full justify-center'>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center font-primary text-white max-[450px]:mb-[28rem] mr-[8rem]'>
            <div className='p-[1rem] flex flex-col bg-slate-400 mb-[1rem] rounded-xl'>
                <label htmlFor='name' className='mb-[0.5rem] text-blue-900'>Nombre </label>
                <input type='text' id='user_name' name='user_name' value={formData.user_name} placeholder='Inserta tu nombre' onChange={handleChange} required className='bg-slate-400 placeholder:text-white font-secondary' />
            </div>

            <div className='p-[1rem] flex flex-col bg-slate-400 mb-[1rem] rounded-xl'>
                <label htmlFor='email' className='mb-[0.5rem] text-blue-900'>Correo Electrónico </label>
                <input type='email' id='user_email' name='user_email' value={formData.user_email} placeholder='Inserta tu email' onChange={handleChange} required className='bg-slate-400 placeholder:text-white font-secondary'/>
            </div>

            <div className='p-[1rem] flex flex-col bg-slate-400 mb-[1rem] rounded-xl'>
                <label htmlFor='message' className='mb-[0.5rem] text-blue-900'>Mensaje </label>
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
