import { useState, useEffect, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

import TextureFilter from "../TextureFilter/TextureFilter";

const Anvil = forwardRef(({ onLoad, ...props }, ref) => {
  const { scene } = useGLTF('anvil/scene.gltf');
  const [loaded, setLoaded] = useState(false); 

  const palette = [
    [98, 100, 108], 
    [155, 156, 159],  
    [179, 188, 188],   
  ];

  useEffect(() => {
    if (loaded) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        const mat = child.material;
        TextureFilter(mat, palette);
      }
    });

    setLoaded(true);
    onLoad();
  }, [loaded, onLoad, scene]);

  return <primitive object={scene} ref={ref} {...props} />;
});

export default Anvil;
