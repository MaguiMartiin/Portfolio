import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { IoLocationSharp } from "react-icons/io5";

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col justify-center bg-blue-950 h-[12rem]">   
            <div className="flex flex-col justify-center items-center max-[700px]:w-full">
                <h1 className='font-secondary text-3xl max-[700px]:text-2xl mt-[2rem] text-white'>MAGALI MARTIN</h1>
            </div>
            <div className='flex  justify-center max-[700px]:flex-row text-white'>
                <a href="https://www.linkedin.com/in/magali-alejandra-martin/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='text-3xl p-[1rem] ' /></a>
                <a href="https://github.com/MaguiMartiin" target="_blank"><FontAwesomeIcon icon={faGithub} className='text-3xl p-[1rem]' /></a>
                <a href="https://api.whatsapp.com/send?phone=543492226051&text=%C2%A1Hola%21+Me+gustaría+recibir+más+información.+" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className='text-3xl p-[1rem]' /></a>
            </div>
            <div className="flex justify-center text-white items-center">
                <IoLocationSharp className='flex mr-[0.3rem]'/>
                <h1> Santa Fe, Argentina</h1>
            </div>
        </div>
    )
}

export default Footer