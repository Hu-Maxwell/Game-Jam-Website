import { useGLTF } from "@react-three/drei";
import { forwardRef, useEffect, useMemo } from "react";
import { animated } from '@react-spring/three';
import TextureFilter from "../../../HomePage/components/TextureFilter/TextureFilter";

const Shield = forwardRef(({ onLoad, onClick, ...props }, ref) => {
  const { scene } = useGLTF('/shield/scene.gltf');

  return (
    <animated.group ref={ref} {...props} onClick={onClick} dispose={null}>
      <primitive object={scene} />
    </animated.group>
  )
});
export default Shield;