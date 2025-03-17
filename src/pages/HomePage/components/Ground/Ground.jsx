import { useMemo, useEffect } from 'react';

import * as THREE from 'three';

const Ground = () => {
  const texture = useMemo(() => new THREE.TextureLoader().load('/cobblestone_1.png'), []);

  useEffect(() => {
    // wtf is this line
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 20);
  }, [texture])

  return (
    // how does this work
    <mesh rotation={[-Math.PI / 2, 0, 0]}> 
      <planeGeometry args={[100, 200]} />
      <meshBasicMaterial 
        attach="material"
        map={texture}
        side={THREE.DoubleSide}
      />
    </mesh>
  );

};

export default Ground;