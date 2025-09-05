import React from 'react'
import {motion} from 'motion/react'
import { FlipWords } from './FlipWords'

export default function HeroText() {
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
      {/* Desktop view */}
      <div className='flex-col hidden md:flex '>
        <motion.h1 className='text-4xl font-medium' initial={{opacity:0 , x:-50}} animate={{opacity:1 , x:0}} transition={{delay:1}}>Hi I'm Ankur Raj Singh</motion.h1>
        <motion.div className='flex flex-col items-start'>
            <motion.p className='text-5xl font-medium text-neutral-300'  initial={{opacity:0 , x:-50}} animate={{opacity:1 , x:0}} transition={{delay:1.2}}>A Developer <br />Dedicated to Crafting</motion.p>
            <motion.div  initial={{opacity:0 , x:-50}} animate={{opacity:1 , x:0}} transition={{delay:1.5}}> <FlipWords words={["Secure" , "Modern", "Scalable"]} className='text-8xl font-bold text-white '/></motion.div>
            <motion.p className='text-4xl font-medium text-neutral-300'  initial={{opacity:0 , x:-50}} animate={{opacity:1 , x:0}} transition={{delay:1.8}}> Web Solution</motion.p>
        </motion.div>
      </div>
      {/* Mobile View */}
      <div className='flex flex-col space-y-6 md:hidden'>
        <motion.p initial={{opacity:0 , x:-50}} animate={{opacity:1 , x:0}} transition={{delay:1}} className='text-4xl font-medium'>Hi, I'm Ankur Raj Singh</motion.p>
         <div>
            <motion.p initial={{opacity:0 , x:-50}} animate={{opacity:1 , x:0}} transition={{delay:1.2}} className='text-5xl font-black text-netural-300'>Bulding</motion.p>
            <motion.div initial={{opacity:0 , x:-50}} animate={{opacity:1 , x:0}} transition={{delay:1.5}}>  <FlipWords words={["Secure" , "Modern", "Scalable"]}  className='text-7xl font-bold text-neutral-300'/> </motion.div>
            <motion.p initial={{opacity:0 , x:-50}} animate={{opacity:1 , x:0}} transition={{delay:1.8}} className='text-4xl font-black text-neutral-300'>Web Application</motion.p>
         </div>
      </div>
    </div>
  )
}
