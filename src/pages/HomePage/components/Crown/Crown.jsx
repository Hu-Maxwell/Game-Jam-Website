import { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const Crown = ({ props, onLoad }) => {
  const { scene } = useGLTF('crown/untitled.gltf');
  const [ loaded, setLoaded ] = useState(false); 

  useEffect(() => {
    if(!loaded) {
      setLoaded(true);
      onLoad(); 
    }
  }, [loaded, onLoad])

  return <primitive object={scene} {...props} />
};

export default Crown;