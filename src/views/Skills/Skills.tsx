import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiJavascript, SiExpress, SiPostgresql, SiSequelize } from 'react-icons/si'

const Skills: React.FC = () => {
  return (
    <div id='skills' className='flex flex-col justify-center ml-[8rem] mr-[8rem] text-white max-[450px]:ml-[0rem] max-[450px]:mr-[0rem]'>
        <div className='flex justify-center mt-[7rem] pb-[2rem]'>
            <h1 className='font-primary text-4xl gradient-text'>HABILIDADES</h1>
        </div>
        <div className='flex w-full max-[450px]:flex-col max-[450px]:items-center '>
            <div className='w-2/4 border-r-[0.08rem] pb-[1.5rem] max-[450px]:border-none'>
                <div className='text-center p-[2rem] font-primary text-blue-800 text-3xl'>
                    <h1>FRONTEND</h1>
                </div>
                <div className='text-2xl flex-col '>
                    <div className='flex mb-[2rem] justify-evenly max-[450px]:flex-col '>
                        <div className='flex items-center w-full justify-center max-[450px]:mb-[2rem]'>
                            <SiTailwindcss/>
                            <p className='ml-[0.5rem] '>Tailwind</p>
                        </div>
                        <div className='flex items-center w-full justify-center'>
                            <FaCss3Alt />
                            <p className='ml-[0.5rem]'>CSS</p>                  
                        </div>
                    </div>
                    <div className='flex mb-[2rem] justify-evenly max-[450px]:flex-col '>
                        <div className='flex items-center w-full justify-center max-[450px]:mb-[2rem]'>
                            <FaHtml5/>
                            <p className='ml-[0.5rem]'>HTML</p>
                        </div>
                        <div className='flex items-center w-full justify-center'>    
                            <SiRedux/>
                            <p className='ml-[0.5rem]'>Redux</p>
                        </div>
                    </div>              
                    <div className='flex justify-evenly max-[450px]:flex-col'>
                        <div className='flex items-center w-full justify-center max-[450px]:mb-[2rem]'>
                            <FaReact/>
                            <p className='ml-[0.5rem]'>React</p>
                        </div>
                        <div className='flex items-center w-full justify-center'>    
                            <SiJavascript/>
                            <p className='ml-[0.5rem]'>JavaScript</p>
                        </div>
                    </div>                  
                </div>  
            </div>       

            <div className='w-2/4'>
                <div className='text-center p-[2rem] font-primary text-blue-800 text-3xl'>
                    <h1>BACKEND</h1>
                </div>
                <div className=' text-2xl flex-col'>
                    <div className='flex justify-evenly mb-[2rem]'>
                        <div className='flex items-center w-full justify-center max-[450px]:mr-[2rem]'>
                            <FaNodeJs/>
                            <p className='ml-[0.5rem]'>NodeJS</p>
                        </div>
                        <div className='flex items-center w-full justify-center'>
                            <SiExpress/>
                            <p className='ml-[0.5rem]'>Express</p>
                        </div>
                    </div>
                    <div className='flex justify-evenly'>
                        <div className='flex items-center w-full justify-center max-[450px]:mr-[2rem]'>
                            <SiPostgresql/>
                            <p className='ml-[0.5rem]'>PostgreSQL</p>
                        </div>
                        <div className='flex items-center w-full justify-center'>
                            <SiSequelize/>
                            <p className='ml-[0.5rem]'>Sequelize</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Skills