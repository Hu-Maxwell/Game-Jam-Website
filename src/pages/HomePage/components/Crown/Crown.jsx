import { useState, useEffect, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Crown = forwardRef(({ onLoad, ...props }, ref) => {
  const { scene } = useGLTF('crown/untitled.gltf');
  const [loaded, setLoaded] = useState(false); 

  useEffect(() => {
    if(!loaded) {
      setLoaded(true);
      onLoad(); 
    }
  }, [loaded, onLoad])

  return <primitive object={scene} ref={ref} {...props} />
});

export default Crown;