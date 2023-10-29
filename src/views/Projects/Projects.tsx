import React from 'react'
import HenryDogs from './HenryDogs.png'
import BookHub from './BookHub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC  = () => {
  return (
    <div id="works" className='flex flex-col justify-center mr-[5rem] ml-[5rem] max-[450px]:mr-[0rem] max-[450px]:ml-[0rem]'>
        <div className='flex justify-center mt-[7rem]'>
          <h1 className='font-primary text-4xl gradient-text'>PROYECTOS</h1>
        </div>
        <div>
          <div className='flex p-[2rem] mt-[2rem] border-b max-[450px]:flex-col'>
            <div className='flex-col flex justify-center w-full'>
              <h1 className='text-center font-primary text-2xl text-blue-900'>Henry Dogs</h1>
              <h2 className='text-center font-primary text-blue-700'>Individual</h2>
              <p className='text-base font-secondary text-center p-[1rem] text-white'>
              Esta experiencia práctica me permitió aplicar los conocimientos adquiridos durante el Bootcamp de Henry y construir una SPA funcional que permita a los usuarios buscar, filtrar, ordenar y agregar razas de perros, entre otras funcionalidades. Asegurándome de que la base de datos esté correctamente configurada y que la aplicación tenga una interfaz de usuario agradable.
              </p>
              <div className=' justify-center flex space-x-8'>  
                <a href='https://github.com/MaguiMartiin/HenryDogsFront' target="_blank">
                  <FontAwesomeIcon icon={faGithub} className='text-2xl text-blue-900'/>
                </a>
                <a href='https://henry-dogs-front.vercel.app/' target="_blank">
                  <FaExternalLinkAlt className='text-2xl text-blue-900'/>
                </a>
              </div>
            </div>
            <div className='w-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded'>
              <img src={HenryDogs} alt="HenryDogs" className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded"/>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <a className="p-[1rem] border-b border-white text-3xl font-bold text-white" href='https://henry-dogs-front.vercel.app/' target="_blank">
                  Ver más
                </a>
              </div>
            </div>   
          </div>
          
          <div className='flex p-[2rem] border-b max-[450px]:flex-col'>
            <div className='flex-col flex justify-center w-full'>
              <h1 className='text-center font-primary text-2xl text-blue-900'>BookHub</h1>
              <h2 className='text-center font-primary text-blue-700'>Grupal</h2>
              <p className='text-base font-secondary text-center p-[1rem] text-white'>
              Mi contribución a BookHub se centró en la creación de una plataforma de comercio electrónico de libros completa y robusta, que brinda a los usuarios la oportunidad de comprar y opinar sobre libros, mientras que ofrece a los administradores un control completo sobre la gestión de libros y ventas.
              </p>
              <div className=' justify-center flex space-x-8'>  
                <a href='https://github.com/MaguiMartiin/BookHubFront' target="_blank">
                  <FontAwesomeIcon icon={faGithub} className='text-2xl text-blue-900'/>
                </a>
                <a href='https://mybookhub.vercel.app/' target="_blank">
                  <FaExternalLinkAlt className='text-2xl text-blue-900'/>
                </a>
              </div>
            </div>
            <div className='w-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded'>
              <img src={BookHub} alt="HenryDogs" className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded"/>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <a className="p-[1rem] border-b border-white text-3xl font-bold text-white" href='https://mybookhub.vercel.app/' target="_blank">
                  Ver más
                </a>
              </div>
            </div>           
          </div>
        </div>
    </div>
  )
}

export default Projects
