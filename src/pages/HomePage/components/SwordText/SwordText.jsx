import { forwardRef } from 'react';

import * as THREE from 'three';
import { Text3D } from '@react-three/drei';

const SwordText = forwardRef(({ swordText, onLoad, ...props }, ref) => {
  return (
    <Text3D
      ref={ref}
      font="/fonts/munro.json" // Make sure this file exists
      size={0.5}
      height={0.1}
      position={[1, 3.9, -.3]}
      rotation={[Math.PI / 2, Math.PI, 0]}
    >
      {swordText}
      <meshStandardMaterial color={new THREE.Color(1.0, 1.0, 1.0)} />
    </Text3D>
  );
});

export default SwordText;
