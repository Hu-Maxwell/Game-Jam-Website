import { useEffect } from 'react';

import * as THREE from 'three';
import { useLoader } from '@react-three/fiber'

const Ground = () => {
  const texture = useLoader(THREE.TextureLoader, '/cobblestone_1.png');

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 20);
    texture.needsUpdate = true;

  return (
    // how does this work
    <mesh rotation={[-Math.PI / 2, 0, 0]}> 
      <planeGeometry args={[100, 200]} />
      <meshStandardMaterial 
        attach="material"
        map={texture}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Ground;