import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Backdrop = () => {
  const texture = useLoader(THREE.TextureLoader, '/schedule/moon.jpg');

  return (
    <mesh position={[7.5, 90, 50]} rotation={[0, Math.PI, 0]}>
      <planeGeometry args={[377, 200]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};
export default Backdrop; 