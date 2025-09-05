import React from 'react'
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { motion } from "motion/react"
import { useState } from 'react';
function Navigation(){
  return(
    <ul className='nav-ul'>
      <li className='nav-li'>
        <a className='nav-link' href="#home">Home</a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href="#about">About</a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href="#work">Work</a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href="#contact">Contact</a>
      </li>
    </ul>
  )
}
export default function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className='fixed inset x-0 z-20 w-full backdrop-blur-lg bg-primary/40 '>
      {/* <div className='mx-auto c-space max-w-7xl '> */}
      <div className='max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-2' >
          <a href="/" className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
            ARS
          </a>
          <button onClick={() => setOpen(!isOpen)} className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
            <img src={isOpen ? closeIcon : menuIcon} alt="toogle" className='w-6 h-6'  />
          </button>
          <nav className='hidden sm:flex'>
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (<motion.div className='block overflow-hidden text-center sm:hidden'
        initial={{opacity: 0,x:-10 }} 
        animate={{opacity:1, x:0}}
        style={{maxHeight:"100vh"}}
        translate={{duration:1}}

      >
        <nav className='pb-5'>
          <Navigation />
        </nav>
      </motion.div>
        
      )}
    </div>
  )
}
