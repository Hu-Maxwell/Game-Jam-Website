import { useRef, forwardRef} from 'react';

import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

import Clock from "./Clock";
import Base from "./Base";

const ClockTower = forwardRef(({ time, schedule, ...props }, ref) => {
  const texture = useLoader(THREE.TextureLoader, '/schedule/r.png');

  return (
    <group ref={ref} position={[0, 8, 0]}>
      {/* base */}
      <Base hour={time} />

      {/* head */}
      <mesh position={[0, 24.5, 4.5]}>
        <boxGeometry args={[13, 13, 13]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* roof */}
      <mesh position={[0, 44.5, 4.2]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[9.5, 27, 4]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* left support */}
      <mesh position={[-7.5, 17, -2]}>
        <boxGeometry args={[2, 33, 2]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* left roof */}
      <mesh position={[-7.5, 36.5, -2]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[2, 10, 4]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* right support */}
      <mesh position={[7.5, 17, -2]}>
        <boxGeometry args={[2, 33, 2]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* right roof */}
      <mesh position={[7.5, 36.5, -2]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[2, 10, 4]} />
        <meshStandardMaterial map={texture} />
      </mesh>


      <Clock time={time} />
    </group>
  );
});

export default ClockTower;
