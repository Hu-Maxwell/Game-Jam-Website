import { useState, useRef, useEffect, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

import TextureFilter from '../../../HomePage/components/TextureFilter/TextureFilter';

const Hammer = forwardRef(({ onLoad, hammerClicked,...props }, ref) => {
  const { scene } = useGLTF('/home/hammer/scene.gltf');
  const [loaded, setLoaded] = useState(false);

  const hammerRef = useRef();

  const palette = [
    [255, 0, 0], 
  ];

  useEffect(() => {
    if (loaded) return;

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

    setLoaded(true);
    onLoad();
  }, [loaded, onLoad, scene])


  return (
    <>
      <primitive 
        object={scene} 
        ref={hammerRef} {...props} 
       />
    </>
  );
});

export default Hammer;
