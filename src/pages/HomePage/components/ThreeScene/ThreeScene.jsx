import { useState, useRef, Suspense } from 'react';

import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from '@react-three/fiber';

import LoadingScreen from "./../LoadingScreen/LoadingScreen";
import Camera from "./../Camera/Camera";
import Ground from "./../Ground/Ground";
import Anvil from "../Anvil/Anvil";
import Hammer from "../Hammer/Hammer";
import Sword from "../Sword/Sword";

import PixelShader from "../PixelShader/PixelShader"

import useScrollCamera from "../../hooks/useScrollCamera";

const ThreeScene = ({ props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const cameraRef = useRef(null);
  const anvilRef = useRef(null);
  const hammerRef = useRef(null);
  const swordRef = useRef(null);

  useScrollCamera(cameraRef);

  return (
    <>
      {/* if not loaded, then display the loading screen */}
      {!isLoaded && <LoadingScreen />} 

      <Canvas
        pixelratio={window.devicePixelRatio}
        style={{ width: '100vw', height: '100vh' }}
      >
        <Suspense fallback={null}> 

          <Camera 
            ref={cameraRef}
            position={[0, 5, -35]}
            rotation={[0, Math.PI, 0]}
            fov={85}
          />

          <spotLight 
            position={[0, 10, 0]}  
            angle={Math.PI} 
            penumbra={0.5}  
            intensity={30}  
            castShadow
            target={anvilRef.current}
          />

          <Ground />

          <Anvil
            ref={anvilRef}
            position={[0, .5, 0]}  
            rotation={[0, 0, 0]}
            scale={1.5}
            onLoad={() => setIsLoaded(true)} 
          />

          <Hammer 
            ref={hammerRef}
            position={[-1, 3.4, -1]}  
            rotation={[1, Math.PI / 2, 0]}
            scale={.03}
            onLoad={() => setIsLoaded(true)} 
          />

          <Sword 
            ref={swordRef}
            position={[-1, 3.7, 0]}  
            rotation={[0, 0, Math.PI]}
            scale={[8, 8, 20]}
            onLoad={() => setIsLoaded(true)} 
          />

        </Suspense>
        <EffectComposer> 
          <PixelShader />
        </EffectComposer>

      </Canvas>
    </>
  );
};

export default ThreeScene;
