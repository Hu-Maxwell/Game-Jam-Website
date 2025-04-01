import { useState, useEffect, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Anvil = forwardRef(({ onLoad, ...props }, ref) => {
  const { scene } = useGLTF('anvil/scene.gltf');
  const [loaded, setLoaded] = useState(false); 

  useEffect(() => {
    if(!loaded) {
      setLoaded(true);
      onLoad(); 
    }
  }, [loaded, onLoad])

  return <primitive object={scene} ref={ref} {...props} />
});

export default Anvil; 