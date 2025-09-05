import React from 'react'
import {motion} from"motion/react"
export default function Card({style, text, image, containerRef}) {
  return image && !text ? (<motion.img className="absolute w-15 currsor-grab" src={image} style={style} whileHover={{scale:1.05}} drag dragConstraints={containerRef} dragElastic={1}/>) : (
    <motion.div className="absolute px-4 py-1 text-lg text-center font-light 
                           rounded-full cursor-grab active:cursor-grabbing 
                           bg-gradient-to-b from-storm to-indigo
                         text-white shadow-md ring-1 ring-gray-300" style={style} whileHover={{scale:1.05}} drag dragConstraints={containerRef} dragElastic={1}>
    {text}
    </motion.div>
  )
}
