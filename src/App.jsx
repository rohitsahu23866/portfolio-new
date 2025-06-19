import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero id="home" />
      <Contact id ="contact"/>
      <Skills/>
      <Projects id="projects"/>
      <Footer/>
    </>
  )
}

export default App