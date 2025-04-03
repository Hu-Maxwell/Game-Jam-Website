import { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const Sparks = ({ position, visible }) => {
  const lightRef = useRef();
  const numParticles = 10;
  const particles = new Float32Array(numParticles * 3);

  // randomize particle location 
  for (let i = 0; i < numParticles; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 0.5; // x 
    particles[i * 3 + 1] = Math.random() * 0.5; // y 
    particles[i * 3 + 2] = (Math.random() - 0.5) * 0.5; // z 
  }

  const lightIntensityRef = useRef(0);

  // adjusts light level
  useEffect(() => {
    if (visible) {
      lightIntensityRef.current = 25;
    }
  }, [visible]);


  if (!visible) return null;

  return (
    <>
      <points position={[position.x, position.y, position.z + 1.5]}>
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

export default Sparks; 