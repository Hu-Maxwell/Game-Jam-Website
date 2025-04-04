import { useState, useEffect, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

import TextureFilter from "../TextureFilter/TextureFilter";

const Sword = forwardRef(({ onLoad, ...props }, ref) => {
  const { scene } = useGLTF('sword/scene.gltf');
  const [loaded, setLoaded] = useState(false); 

  const palette = [
    [0, 255, 0], 
  ];

  useEffect(() => {
    if (loaded) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        const mat = child.material;
        TextureFilter(mat, palette);

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

  return <primitive object={scene} ref={ref} {...props} />
});

export default Sword;