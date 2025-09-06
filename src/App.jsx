import { useState } from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from'./section/Projects'
import Contact from './section/Contact'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
 

  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <SpeedInsights/>
      {/*
      <Testimonial />
      <Footer /> */}
    </div>
  )
}

export default App
