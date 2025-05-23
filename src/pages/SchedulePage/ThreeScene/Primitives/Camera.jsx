import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

import { useThree } from '@react-three/fiber';
import { PerspectiveCamera, PointerLockControls } from '@react-three/drei';

import useKeyboardMovement from  "./../../../HomePage/hooks/useKeyboardMovement"
import CameraTilt from "./CameraTilt";

const Camera = forwardRef((props, ref) => {
  const { camera } = useThree();
  const internalCamRef = useRef();

  useImperativeHandle(ref, () => internalCamRef.current, []);
  // useKeyboardMovement(camera); 

  return (
    <>
      <PerspectiveCamera makeDefault {...props} ref={internalCamRef}>
        <CameraTilt />
      </PerspectiveCamera> 
      {/* <PointerLockControls /> */}
    </>
  );
}); 

export default Camera;