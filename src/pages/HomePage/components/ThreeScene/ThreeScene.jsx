import { useState, useRef, Suspense } from 'react';

import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from '@react-three/fiber';

import LoadingScreen from "./../LoadingScreen/LoadingScreen";
import Camera from "./../Camera/Camera";
import Ground from "./../Ground/Ground";
import CrownOne from "../Crown/CrownOne";
import CrownTwo from "../Crown/CrownTwo";
import PixelShader from "../PixelShader/PixelShader"
import Text from "./Text";

import useScrollCamera from "./../../hooks/useScrollCamera";

const ThreeScene = ({ props }) => {
  // have meshes set isLoaded to true
  const [isLoaded, setIsLoaded] = useState(false);
  const [crownOneVisible, setCrownOneVisible] = useState(true);
  const [crownTwoVisible, setCrownTwoVisible] = useState(false);

  const cameraRef = useRef(null);
  const crownOneRef = useRef(null);
  const crownTwoRef = useRef(null);

  // cuz you dont wanna pass null to useScrollCamera
  useScrollCamera(cameraRef, crownOneRef, crownTwoRef, setCrownOneVisible, setCrownTwoVisible);

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

          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          <Ground />

          <CrownOne
            ref={crownOneRef}
            position={[0, 8, 0]}  
            rotation={[.6, 0, 0]}
            scale={1.5}
            onLoad={() => setIsLoaded(true)}
            visible={crownOneVisible} 
          />

          <CrownTwo 
            ref={crownTwoRef} 
            position={[0, 8, 0]}
            rotation={[.6 , 0, 0]}  
            scale={1.5}
            onLoad={() => setIsLoaded(true)}
            visible={crownTwoVisible} 
          />

        <Text position={[0, 5, 1]} scale={[1, 1, .01]} /> 

        </Suspense>
        {/* <EffectComposer> 
          <PixelShader />
        </EffectComposer> */}

      </Canvas>
    </>
  );
};

export default ThreeScene;
