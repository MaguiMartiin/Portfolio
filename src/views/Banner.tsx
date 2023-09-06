import React from 'react';
import Magali from './Magali.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Banner: React.FC = () => {
  return (
    <div id="home" className='flex justify-center mt-[4rem]'>
      <div className='flex flex-col justify-center'>
        <FontAwesomeIcon icon={faLinkedin} className='text-2xl p-[1rem] text-blue-700' />
        <FontAwesomeIcon icon={faGithub} className='text-2xl p-[1rem] text-blue-700' />
        <FontAwesomeIcon icon={faWhatsapp} className='text-2xl p-[1rem] text-blue-700' />
      </div>
      <div className="p-[2rem]">
        <img src={Magali} alt="Fotografía de Magali Martin" className='rounded-full w-80 h-80 object-cover'/>
      </div>
      <div className="flex flex-col justify-center items-center mt-[3rem]">
        <h1 className='font-secondary text-3xl'>______ MAGALI MARTIN</h1>
        <h1 className='font-primary animate-wiggle animate-once text-5xl gradient-text mt-[0.5rem]'>Full Stack Web Developer</h1>
        <h1 className='mt-[1rem] font-secondary'>Desarrolladora web con experiencia en proyectos front-end y back-end</h1>
        <div className='flex justify-center'>
          <button className='bg-blue-700 mt-[2rem] w-fit p-[0.5rem] justify-self-center rounded-xl text-xl font-secondary text-white'>Contactame</button>
        </div>
      </div>
    </div>
  )
}

export default Banner;
