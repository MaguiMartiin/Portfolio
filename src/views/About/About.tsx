import React from 'react'
import { FaGraduationCap, FaBriefcase, FaFilePdf } from 'react-icons/fa';
import Diploma from './Diploma.jpg'

const About: React.FC  = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('works');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div id="about" className='flex flex-col justify-center max-[700px]:mb-[28rem]'>
      <div className='flex justify-center mt-[7rem]'>
        <h1 className='font-primary text-4xl gradient-text'>SOBRE MI</h1>
      </div>
      <div className=' flex mt-[2rem] w-screen h-[25rem] p-[2rem] max-[700px]:flex-col'>
        <div className='flex flex-col w-full ml-[5rem] max-[700px]:ml-[0rem]'>
          <div className='flex gap-[2rem] justify-evenly text-blue-900'>
            <div className='flex flex-col w-[10rem] h-[10rem] rounded-lg border shadow-lg text-center justify-center bg-slate-200'>
              <div className='flex justify-center'>
                <FaGraduationCap />                
              </div>
              <h1 className='font-primary mb-[1rem]'>Educación</h1>
              <h1 className='font-secondary text-sm'>Henry Bootcamp. 2022-2023</h1>
            </div>
            <div className='flex flex-col w-[10rem] h-[10rem] rounded-lg border shadow-lg text-center justify-center bg-slate-200'>
              <div className='flex justify-center'>
                <FaBriefcase className='text-sm' />
              </div>
              <h1 className='font-primary mb-[1rem]'>Experiencia</h1>
              <div>
                <button className='font-secondary text-sm p-[0.5rem] bg-blue-800 text-blue-100 rounded-md animate-pulse' onClick={scrollToProjects}>Ver proyectos</button>
              </div>
            </div>
          </div>
          <div className='flex p-[1rem]'>
            <p className='text-xl font-secondary text-center text-white'>
            Mi formación en el Bootcamp de SoyHenry me ha preparado para enfrentar desafíos en el mundo real y me ha dotado de habilidades técnicas y prácticas esenciales en el desarrollo Front-end y Back-end.
            </p>
          </div>
          <div className='flex justify-center items-center text-center'>
            <button className='bg-slate-500 w-fit p-[0.6rem] justify-center rounded-xl text-base font-secondary text-white'>
              <a href='/pdf' target='blanck' className='flex items-center'>
                Mirá mi CV <FaFilePdf className='ml-[0.3rem] mb-[0.1rem]'/> 
              </a>
            </button>
          </div>
        </div>     
        <div className=' flex w-full justify-center mr-[5rem] mt-[0.5rem]'>
          <img src={Diploma} alt="Diploma Henry" />
        </div>
      </div>
    </div>
  )
}

export default About