import React from 'react'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import Diploma from './Diploma.jpg'

const About: React.FC  = () => {
  return (
    <div id="about" className='flex flex-col justify-center mb-[3rem]'>
      <div className='flex justify-center'>
        <h1 className='font-primary text-4xl'>SOBRE MI</h1>
      </div>
      <div className=' flex mt-[2rem] w-screen h-[25rem]'>
        <div className=' flex flex-col w-full'>
          <div className='flex gap-[2rem] justify-evenly pt-[2rem]  p-[1rem]'>
            <div className='flex flex-col w-[10rem] h-[10rem] rounded-lg border shadow-lg text-center p-[1rem] justify-center'>
              <div className='flex justify-center'>
                <FaGraduationCap />                
              </div>
              <h1 className='font-primary mb-[1rem]'>Educación</h1>
              <h1 className='font-secondary text-sm'>Henry Bootcamp. 2022-2023</h1>
            </div>
            <div className='flex flex-col w-[10rem] h-[10rem] rounded-lg border shadow-lg text-center p-[1rem] justify-center'>
              <div className='flex justify-center'>
                <FaBriefcase className='text-sm' />
              </div>
              <h1 className='font-primary mb-[1rem]'>Experiencia</h1>
              <button className='font-secondary text-sm'>Ver proyectos</button>
            </div>
            <div className='flex flex-col w-[10rem] h-[10rem] rounded-lg border shadow-lg text-center p-[1rem] justify-center'>
              <h1 className='font-primary'>Education</h1>
            </div>
          </div>
          <div className='flex p-[2rem]'>
            <p className='text-lg font-secondary'>
            ¡Hola! Soy Magali Martin, una apasionada desarrolladora web con experiencia en la creación de sitios web visualmente atractivos y funcionales. Mi objetivo es combinar mis habilidades técnicas con la creatividad para construir soluciones web sorprendentes.
            </p>
          </div>
        </div>     
        <div className=' flex w-full justify-center'>
          <img src={Diploma} alt="Diploma Henry" />
        </div>
      </div>
    </div>
  )
}

export default About