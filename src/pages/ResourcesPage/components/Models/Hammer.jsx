import { useState, useEffect, forwardRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';
import TextureFilter from '../../../HomePage/components/TextureFilter/TextureFilter';


const Hammer = forwardRef(({ onLoad, onClick, ...props }, ref) => {
  const { scene } = useGLTF('/home/hammer/scene.gltf');

  return (
    <animated.group ref={ref} {...props} onClick={onClick} dispose={null}>
      <primitive object={scene} />
    </animated.group>
  )
});

useGLTF.preload('/home/hammer/scene.gltf');


export default Hammer;