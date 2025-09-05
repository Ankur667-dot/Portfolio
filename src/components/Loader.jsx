import { Html, useProgress } from '@react-three/drei'
import React from 'react'

export default function Loader() {
    const {progress} = useProgress();
  return (
    <Html center className='text-xl font-bold text-center'> {progress}% Loading</Html>
  )
}
