import { useGLTF } from '@react-three/drei';

const Crown = (props) => {
  const { scene } = useGLTF('crown/untitled.gltf');

  return <primitive object={scene} {...props} />
};

export default Crown;