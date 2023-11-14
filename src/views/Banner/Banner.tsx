import React from 'react';
import Magali from './Magali.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Banner: React.FC = () => {
  return (
    <div id="home" className='flex justify-center mt-[4rem] p-[3rem] max-[450px]:flex-col'>
      <div className='flex flex-col justify-center mt-[1.5rem] max-[450px]:flex-row'>
        <a href="https://www.linkedin.com/in/magali-alejandra-martin/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='text-3xl p-[1rem] text-blue-700' /></a>
        <a href="https://github.com/MaguiMartiin" target="_blank"><FontAwesomeIcon icon={faGithub} className='text-3xl p-[1rem] text-blue-700' /></a>
        <a href="https://api.whatsapp.com/send?phone=543492226051&text=%C2%A1Hola%21+Me+gustaría+recibir+más+información.+" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className='text-3xl p-[1rem] text-blue-700' /></a>
      </div>
      <div className="p-[2rem] mt-[1rem]">
        <img src={Magali} alt="Fotografía de Magali Martin" className='rounded-full w-80 h-80 object-cover max-[450px]:w-[16rem] max-[450px]:h-[16rem]'/>
      </div>
      <div className="flex flex-col justify-center items-center mt-[4rem] w-[45%] max-[450px]:w-full ">
        <h1 className='font-secondary text-3xl max-[450px]:text-2xl'>______ MAGALI MARTIN</h1>
        <h1 className='font-primary animate-wiggle animate-once text-5xl gradient-text mt-[0.5rem] max-[450px]:text-center'>Full Stack Web Developer</h1>
        <h1 className='mt-[1.5rem] font-secondary text-center '>¡Hola! Soy Magali Martin, una apasionada desarrolladora web con experiencia en la creación de sitios web visualmente atractivos y funcionales. Mi objetivo es combinar mis habilidades técnicas con la creatividad para construir soluciones web sorprendentes.</h1>
        <div className='flex justify-center'>
          <button className='bg-blue-700 mt-[1.5rem] w-fit p-[0.8rem] justify-self-center rounded-xl text-xl font-secondary text-white'>Contáctame!</button>
        </div> 
      </div>
    </div>
  )
}

export default Banner;
