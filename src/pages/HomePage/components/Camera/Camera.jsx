import { forwardRef, useImperativeHandle } from 'react';

import { useThree } from '@react-three/fiber';
import { PerspectiveCamera, PointerLockControls } from '@react-three/drei';

import useKeyboardMovement from "./../../hooks/useKeyboardMovement";

const Camera = forwardRef((props, ref) => {
  const { camera } = useThree();

  useKeyboardMovement(camera); 

  useImperativeHandle(ref, () => camera, [camera]);

  return (
    <>
      <PerspectiveCamera makeDefault {...props} />
      <PointerLockControls />
    </>
  );
}); 

export default Camera;