import { forwardRef,  } from 'react';
import { useGLTF } from '@react-three/drei';

const Sword = forwardRef(({ onLoad, onClick, ...props }, ref) => {
  const { scene } = useGLTF('/home/sword/scene.gltf');

  return (
    <group ref={ref} {...props} scale={[9, 9, 9]} position={[34, 10, 0]} rotation={[0, Math.PI / 2, 0]} onClick={onClick} dispose={null}>
      <primitive object={scene} />
    </group>
  )
});

export default Sword;