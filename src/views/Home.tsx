import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import About from './About'

const Home: React.FC  = () => {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <About/>
    </div>
  )
}

export default Home