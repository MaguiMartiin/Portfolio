import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner/Banner'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

const Home: React.FC  = () => {
  return (
    <div className='bg'>
      <div className='flex justify-center'>
        <NavBar/>
      </div>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default Home