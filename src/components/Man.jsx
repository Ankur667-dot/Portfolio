// import React, { useRef, useState, useEffect } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";

// export default function Man(props) {
//   const group = useRef();
//   const { scene, animations } = useGLTF("/models/business_man_-_low_polygon_game_character.glb");
//   const { actions } = useAnimations(animations, group);

//   const [hovered, setHovered] = useState(false);

  
//     useEffect(() => {
//     if (actions && actions["Rig|walk"]) {
//       Object.values(actions).forEach(a => a.stop());
//       actions["Rig|walk"].reset().play();
//       actions["Rig|walk"].timeScale = 1; 
//     }
//   }, [actions]);

  
//   useEffect(() => {
//     if (!actions) return;

//     if (hovered && actions["Rig|jump"]) {
//       Object.values(actions).forEach(a => a.stop());
//       actions["Rig|jump"].reset().play();
//       actions["Rig|jump"].timeScale = 1;
//     } else if (!hovered && actions["Rig|idle"]) {
//       Object.values(actions).forEach(a => a.stop());
//       actions["Rig|idle"].reset().play();
//       actions["Rig|idle"].timeScale = 1;
//     }
//   }, [hovered, actions]);

//   return (
//     <group
//       ref={group}
//       {...props}
//       scale={0.5} position={[0.9, -0.5, 0]} rotation={[0, -Math.PI / 18, 0]}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       <primitive object={scene} />
//     </group>
//   );
// }

// useGLTF.preload("/models/business_man_-_low_polygon_game_character.glb");


import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";


useGLTF.preload("/models/business_man_-_low_polygon_game_character.glb"); // Preload the model for faster reload

export default function Man(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/business_man_-_low_polygon_game_character.glb");
  const { actions } = useAnimations(animations, group);

  const [hovered, setHovered] = useState(false);

 
  const playAnimation = (name) => {
    if (!actions[name]) return;
    Object.values(actions).forEach((action) => action.stop()); 
    actions[name].reset().fadeIn(0.2).play();
  };

  useEffect(() => {
    playAnimation("Rig|walk");
  }, [actions]);
  

  //     useEffect(() => {
  //   if (actions && actions["Rig|walk"]) {
  //     Object.values(actions).forEach(a => a.stop());
  //     actions["Rig|walk"].reset().play();
  //     actions["Rig|walk"].timeScale = 1; 
  //   }
  // }, [actions]);

  
  useEffect(() => {
    if (hovered) {
      playAnimation("Rig|jump");
    } else {
      playAnimation("Rig|idle");
    }
  }, [hovered]);

  //  useFrame((_, delta) => {
  //   if (!hovered && group.current) {
  //     group.current.rotation.y += delta * 0.3; // Adjust speed (0.3 rad/sec)
  //   }
  // });

  const yPosition = useMotionValue(5);
  const ySpring =useSpring(yPosition, {damping:30});
  useEffect(()=>{ySpring.set(-0.6)},
  [ySpring]);

  useFrame(()=> {group.current.position.y =ySpring.get()})
  return (
    <group
      ref={group}
      {...props}
      // scale={0.5} position={[0.9, -0.5, 0]}
       rotation={[0, -Math.PI / 20, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} />
    </group>
  );
}
