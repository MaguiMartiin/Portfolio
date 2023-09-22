import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import About from './About'

const Home: React.FC  = () => {
  return (
    <div>
      <div className='flex justify-center mt-[2rem]'>
        <NavBar/>
      </div>
        <Banner/>
        <About/>
    </div>
  )
}

export default Home