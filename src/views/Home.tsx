import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner/Banner'
import About from './About/About'
import Projects from './Projects/Projects'

const Home: React.FC  = () => {
  return (
    <div>
      <div className='flex justify-center mt-[2rem]'>
        <NavBar/>
      </div>
        <Banner/>
        <About/>
        <Projects/>
    </div>
  )
}

export default Home