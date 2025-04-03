import { useState, useRef, useEffect, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import Sparks from "./Sparks";

import TextureFilter from "../TextureFilter/TextureFilter";


const Hammer = forwardRef(({ onLoad, ...props }, ref) => {
  const { scene } = useGLTF('hammer/scene.gltf');
  const hammerRef = ref || useRef();
  const [loaded, setLoaded] = useState(false);
  const [showSparks, setShowSparks] = useState(false);
  const sparkPosition = useRef(new THREE.Vector3());

  const palette = [
    [255, 0, 0], 
  ];


  useEffect(() => {
    if (loaded) return;

    // scene.traverse((child) => {
    //   if (child.isMesh) {
    //     const mat = child.material;
    //     TextureFilter(mat, palette);
    //   }
    // });

    setLoaded(true);
    onLoad();
  }, [loaded, onLoad, scene])

  useFrame((state, delta) => {
    if (!hammerRef.current) return;

    const cycleDuration = 2;
    const elapsed = state.clock.getElapsedTime() % cycleDuration;
    const progress = elapsed / cycleDuration;

    if (!hammerRef.current.userData.initialPosition) {
      hammerRef.current.userData.initialPosition = hammerRef.current.position.clone();
    }
    const initialPos = hammerRef.current.userData.initialPosition;

    let targetPosition = new THREE.Vector3();

    if (progress < 0.5) {
      const t = progress * 2;
      const strikeDistance = -2;
      targetPosition.set(initialPos.x, initialPos.y, initialPos.z + strikeDistance * t * t);
    } else {
      const t = (progress - 0.5) * 2;
      const liftDistance = 1;
      targetPosition.set(initialPos.x, initialPos.y + liftDistance * t, initialPos.z - 2);
    }

    hammerRef.current.position.lerp(targetPosition, delta * 5);

    if (progress >= 0.12 && progress <= 0.16) {
      if (!showSparks) {
        setShowSparks(true);
        sparkPosition.current.copy(hammerRef.current.position);
        setTimeout(() => setShowSparks(false), 200); 
      }
    }
  });

  return (
    <>
      <primitive object={scene} ref={hammerRef} {...props} />
      <Sparks position={sparkPosition.current} visible={showSparks} />
    </>
  );
});

export default Hammer;
