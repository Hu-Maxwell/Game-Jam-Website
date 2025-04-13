import { useRef, forwardRef, useImperativeHandle } from 'react';

import { PerspectiveCamera } from '@react-three/drei';

const Camera = forwardRef((props, ref) => {
  const internalCamRef = useRef();

  useImperativeHandle(ref, () => internalCamRef.current, []);

  return (
    <>
      <PerspectiveCamera makeDefault {...props} ref={internalCamRef} />
    </>
  );
}); 

export default Camera;