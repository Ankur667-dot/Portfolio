import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"
import HeroText from "../components/HeroText";
import Man from "../components/Man";
import  {useMediaQuery} from 'react-responsive'
import { useFrame } from "@react-three/fiber";
import * as easing from "maath/easing";
import Loader from "../components/Loader";
import {Spotlight} from "../components/Spotlight";

export default function Hero() {
  const isMobile = useMediaQuery({maxWidth: 853})
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden c-space" id="home">
      <HeroText />
      <Spotlight />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[0, 1, 5]} intensity={1} />
          <Suspense fallback={<Loader />}>
            <Man scale={isMobile ? 0.42 : 0.67}
              position={isMobile ? [0, -0.51, 0] : [0.9, -0.6, 0]}/>
              <Rig />
          </Suspense> 
        </Canvas>
      </figure>
    </section>
  );
}

function Rig(){
  return useFrame((state, delta) =>{
    easing.damp3(
      state.camera.position,
      [state.mouse.x/10, state.mouse.y/10, 2.2],
      0.5,
      delta
    )
  })
}


