import { useState, useRef, useEffect, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Sparks Component
const Sparks = ({ position, visible }) => {
  const sparkRef = useRef();
  const lightRef = useRef();
  const numParticles = 20;
  const particles = new Float32Array(numParticles * 3);
  const [lightIntensity, setLightIntensity] = useState(0);

  for (let i = 0; i < numParticles; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 0.5; 
    particles[i * 3 + 1] = Math.random() * 0.3; 
    particles[i * 3 + 2] = (Math.random() - 0.5) * 0.5; 
  }

  useFrame((state, delta) => {
    if (sparkRef.current) {
      const positions = sparkRef.current.geometry.attributes.position.array;
      for (let i = 0; i < numParticles; i++) {
        positions[i * 3 + 1] += delta * 1.5;
        positions[i * 3] += (Math.random() - 0.5) * delta * 0.5; 
        positions[i * 3 + 2] += (Math.random() - 0.5) * delta * 0.5; 
      }
      sparkRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (lightRef.current) {
      setLightIntensity((prev) => Math.max(0, prev - delta * 10));
      lightRef.current.intensity = lightIntensity;
    }
  });

  useEffect(() => {
    if (visible) {
      setLightIntensity(25); 
    }
  }, [visible]);

  if (!visible) return null;



  return (
    <>
      <points ref={sparkRef} position={[position.x, position.y, position.z + 1.5]}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            array={particles}
            count={numParticles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial attach="material" size={0.1} color="orange" transparent opacity={0.8} />
      </points>
      <pointLight
        ref={lightRef}
        position={[position.x, position.y + 10, position.z]}
        color="orange"
        intensity={15} 
        distance={15} 
        decay={2}
      />
    </>
  );
};

// Hammer Component
const Hammer = forwardRef(({ onLoad, ...props }, ref) => {
  const { scene } = useGLTF('hammer/scene.gltf');
  const hammerRef = ref || useRef();
  const [loaded, setLoaded] = useState(false);
  const [showSparks, setShowSparks] = useState(false);
  const sparkPosition = useRef(new THREE.Vector3());

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      if (onLoad) onLoad();
    }
  }, [loaded, onLoad]);

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
