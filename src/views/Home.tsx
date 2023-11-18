import React, {useEffect} from 'react'
import NavBar from './NavBar'
import Banner from './Banner/Banner'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'

const Home: React.FC  = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)}, 0)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='bg'>
      <div className='flex justify-center'>
        <NavBar/>
      </div>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home