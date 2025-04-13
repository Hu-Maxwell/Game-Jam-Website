import { useState, useEffect, forwardRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';

const Sword = forwardRef(({ onLoad, onClick, ...props }, ref) => {
  const { scene } = useGLTF('/home/sword/scene.gltf');

  return (
    <animated.group ref={ref} {...props} onClick={onClick} dispose={null}>
      <primitive object={scene} />
    </animated.group>
  )
});

export default Sword;