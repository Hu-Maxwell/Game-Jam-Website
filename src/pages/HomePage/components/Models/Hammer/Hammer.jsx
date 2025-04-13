import { useState, useRef, useEffect, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import Sparks from "./Sparks";

import TextureFilter from "../../TextureFilter/TextureFilter";

const Hammer = forwardRef(({ onLoad, hammerClicked,...props }, ref) => {
  const { scene } = useGLTF('/home/hammer/scene.gltf');
  const [loaded, setLoaded] = useState(false);

  const hammerRef = useRef();
  const [showSparks, setShowSparks] = useState(false);
  const sparkPosition = useRef(new THREE.Vector3());

  const palette = [
    [255, 0, 0], 
  ];

  useEffect(() => {
    if (loaded) return;

    const processedMaterials = new Set();

    scene.traverse((child) => {
      if (child.isMesh) {
        const mat = child.material;
        if (!processedMaterials.has(mat)) {
          TextureFilter(mat, palette);
          processedMaterials.add(mat);
        }

        mat.envMap = null;
        mat.envMapIntensity = 0;
        mat.reflectivity = 0;
        mat.roughness = 1;
        mat.metalness = 0;
      }
    });

    setLoaded(true);
    onLoad();
  }, [loaded, onLoad, scene])

  const hammerInitialPosRef = useRef(null);
  const [smashStartTime, setSmashStartTime] = useState(null);

  // animation
  useFrame((state, delta) => {
    if (hammerClicked.current && smashStartTime == null) {
      setSmashStartTime(performance.now() / 1000);
      hammerClicked.current = false;
    }

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

    if (progress > .15 && progress < .27) { setShowSparks(true); }
    else { setShowSparks(false); }

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
