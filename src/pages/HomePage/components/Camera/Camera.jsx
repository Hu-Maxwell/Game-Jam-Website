import { useThree } from '@react-three/fiber';
import { PerspectiveCamera, PointerLockControls } from '@react-three/drei';

import useKeyboardMovement from "./../../hooks/useKeyboardMovement";

const Camera = () => {
  const { camera } = useThree();

  useKeyboardMovement(camera); 

  return (
    <PerspectiveCamera makeDefault position={[0, 5, 0]} fov={85}>
      <PointerLockControls />
    </PerspectiveCamera>
  );
}

export default Camera;