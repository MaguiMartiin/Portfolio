import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Contact:React.FC = () => {
    return (       
        <div id="contact" className='flex flex-col justify-center max-[450px]:mb-[28rem]'>
            <div className='flex justify-center mt-[7rem]'>
                <h1 className='font-primary text-4xl gradient-text'>CONTACTAME</h1>
            </div>
            <div className='text-center p-[1rem]'>
                <a href="https://www.linkedin.com/in/magali-alejandra-martin/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='text-3xl p-[1rem] text-blue-700' /></a>
                <a href="https://github.com/MaguiMartiin" target="_blank"><FontAwesomeIcon icon={faGithub} className='text-3xl p-[1rem] text-blue-700' /></a>
                <a href="https://api.whatsapp.com/send?phone=543492226051&text=%C2%A1Hola%21+Estoy+disponible+en+WhatsApp+para+cualquier+consulta.+" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className='text-3xl p-[1rem] text-blue-700' /></a>
            </div>
        </div>        
    )
}

export default Contact;