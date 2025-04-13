import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

const Shield = forwardRef(({ onLoad, onClick, ...props }, ref) => {
  const { scene } = useGLTF('/shield/shield.glb');


  return (
    <group ref={ref} {...props} scale={[9, 9, 9]} position={[13, 20, 0]} rotation={[0, Math.PI, 0]} onClick={onClick} dispose={null}>
      <primitive object={scene} />
    </group>
  )
});
export default Shield;