import { PerspectiveCamera, PointerLockControls } from '@react-three/drei';

const Camera = () => {
  

  return (
    <PerspectiveCamera makeDefault position={[0, 5, 0]} fov={85}>
      <PointerLockControls />
    </PerspectiveCamera>
  );
}

export default Camera;