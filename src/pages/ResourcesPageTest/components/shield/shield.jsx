import { useGLTF } from "@react-three/drei";
import { forwardRef, useEffect, useMemo } from "react";
import { animated } from '@react-spring/three';
import TextureFilter from "../../../HomePage/components/TextureFilter/TextureFilter";

const Shield = forwardRef(({ onLoad, onClick, ...props }, ref) => {
    const { scene } = useGLTF('/shield/scene.gltf');
    const palette = useMemo(() => [ [0, 255, 0], ], []);

    const processedScene = useMemo(() => {
        if (!scene) return null; // Guard clause

        console.log("Processing Hammer Scene in useMemo..."); // Debug log

        const scenes = scene.clone(); // Clone before modifying

        scenes.traverse((child) => {
        if (child.isMesh) {
            child.material = child.material.clone();
            const mat = child.material;
            TextureFilter(mat, palette);
        }
        });

        return scenes;

    }, [scene, palette])

    useEffect(() => {
        if (processedScene && onLoad) {
        console.log("Hammer processedScene ready, calling onLoad");
        onLoad();
        }
    }, [processedScene, onLoad]);

    if (!processedScene) {
        return null;
    }
  
    return (
        <animated.group ref={ref} {...props} onClick={onClick} dispose={null}>
          <primitive object={scene} />
        </animated.group>
    )
  });
  
  useGLTF.preload('/home/shield/scene.gltf');

  export default Shield;