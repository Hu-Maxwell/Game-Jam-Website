import { useState, useRef, useEffect, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import Sparks from "./Sparks";

const Hammer = forwardRef(({ onLoad, ...props }, ref) => {
  const { scene } = useGLTF('hammer/scene.gltf');
  const [loaded, setLoaded] = useState(false);

  const hammerRef = useRef();
  const [showSparks, setShowSparks] = useState(false);
  const sparkPosition = useRef(new THREE.Vector3());

  const palette = [
    [255, 0, 0], 
  ];

  useEffect(() => {
    if (loaded) return;

    // really laggy. why?
    // scene.traverse((child) => {
    //   if (child.isMesh) {
    //     const mat = child.material;
    //     TextureFilter(mat, palette);
    //   }
    // });

    setLoaded(true);
    onLoad();
  }, [loaded, onLoad, scene])

  const hammerInitialPosRef = useRef(null);
  const [smashStartTime, setSmashStartTime] = useState(null);

  useEffect(() => {
    const handleClick = () => {
      if (smashStartTime) { 
        return;
      } 
      setSmashStartTime(performance.now() / 1000); 
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);


  // animation
  useFrame((state, delta) => {
    if (smashStartTime == null) return;

    const elapsed = (performance.now() / 1000) - smashStartTime;
    const cycleDuration = 1; 
    const progress = THREE.MathUtils.clamp(elapsed / cycleDuration, 0, 1);

    if (!hammerInitialPosRef.current && hammerRef.current) {
      hammerInitialPosRef.current = hammerRef.current.position.clone();
    }
    const initialPos = hammerInitialPosRef.current;

    let targetPosition = new THREE.Vector3();
    const smashTime = 0.2; 
    const backDistance = -2;     
    const liftDistance = 1;  

    // first .2 secs - smash downwards in parabolic curve
    if (progress < smashTime) {
      const t = progress / smashTime;
      targetPosition.set(
        initialPos.x,
        initialPos.y,
        initialPos.z + backDistance * t * t
      );
    // last .8 secs - lift up, quickly backwards and up 
    } else {
      const t = (progress - smashTime) / (1 - smashTime);
      targetPosition.set(
        initialPos.x,
        initialPos.y + liftDistance * t,
        initialPos.z + backDistance 
      );
    }

    hammerRef.current.position.lerp(targetPosition, delta * 10);

    if (progress === 1) {
      setSmashStartTime(null);
    }
  });


  return (
    <>
      <primitive 
        object={scene} 
        ref={hammerRef} {...props} 
       />
      <Sparks 
        position={sparkPosition.current} 
        visible={showSparks} 
      />
    </>
  );
});

export default Hammer;
