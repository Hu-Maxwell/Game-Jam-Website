import { useEffect, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';
import TextureFilter from '../TextureFilter/TextureFilter';

const Hammer = forwardRef(({ onLoad, onClick, ...props }, ref) => {
  const { scene } = useGLTF('/home/hammer/scene.gltf');

  const palette = [
    [0, 0, 255]
  ];

  useEffect(() => {
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
  }, [scene])

  return (
    <animated.group ref={ref} {...props} onClick={onClick} dispose={null}>
      <primitive object={scene} />
    </animated.group>
  )
});

useGLTF.preload('/home/hammer/scene.gltf');


export default Hammer;