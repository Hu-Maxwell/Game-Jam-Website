import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";
import { animated } from '@react-spring/three';

const Shield = forwardRef(({ onLoad, onClick, ...props }, ref) => {
  const { scene } = useGLTF('/shield/shield.glb');


  return (
    <animated.group ref={ref} {...props} onClick={onClick} dispose={null}>
      <primitive object={scene} />
    </animated.group>
  )
});
export default Shield;