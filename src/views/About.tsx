import React from 'react'

const About: React.FC  = () => {
  return (
    <div id="about" className='flex flex-col justify-center mt-[6rem]'>
      <div className='flex justify-center'>
        <h1 className='font-primary text-4xl'>ABOUT ME</h1>
      </div>
      <div className='flex mt-[2rem]'>
        <div className='w-full'>
            <p className='text-2xl font-secondary'>
              Hi there! I'm Magali Martin, a passionate web developer with experience in creating visually appealing and functional websites. My goal is to combine my technical skills with creativity to build amazing web solutions.
            </p>
        </div>
        <div className='w-full'>
            <h1>Eduación</h1>
        </div>
      </div>
    </div>
  )
}

export default About