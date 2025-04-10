import { useState, useEffect, useRef, Suspense } from 'react';

import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from '@react-three/fiber';

import NavBar from "@/components/NavBar/NavBar";

import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Camera from "./../Camera/Camera";
import Ground from "./../Ground/Ground";
import Anvil from "../Anvil/Anvil";
import Hammer from "../Hammer/Hammer";
import Sword from "../Sword/Sword";
import Walls from "../Walls/Walls";
import SwordText from "../SwordText/SwordText";

import PixelShader from "../PixelShader/PixelShader"

import useMoveCamera from "../../hooks/useMoveCamera";
import useClick from "../../hooks/useClick";

const ThreeScene = ({ props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [swordText, setSwordText] = useState("");

  const cameraRef = useRef(null);
  const lightRef = useRef(null); 
  const anvilRef = useRef(null);
  const hammerRef = useRef(null);
  const swordRef = useRef(null);
  const swordTextRef = useRef(null); 

  const hammerClickedRef = useRef(false); 

  useClick(hammerClickedRef, swordRef, swordTextRef, setSwordText, cameraRef);
  useMoveCamera(cameraRef); 

  // makes it so spotlight can't point at null 
  useEffect(() => {
    if (lightRef.current && anvilRef.current) {
      lightRef.current.target = anvilRef.current;
    }
  }, [isLoaded]); 

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
            ref={lightRef}
            position={[2, 10, 2]}  
            angle={Math.PI} 
            penumbra={0.5}  
            intensity={60}  
            castShadow
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
            hammerClicked={hammerClickedRef}
            position={[-1, 3.4, -1]}  
            rotation={[1, Math.PI / 2, 0]}
            scale={.03}
            onLoad={() => setIsLoaded(true)} 
          />

          <Sword 
            ref={swordRef}
            position={[1, 3.8, 0]}  
            rotation={[0, 0, Math.PI / 2]}
            scale={[2, 3, 3]}
            onLoad={() => setIsLoaded(true)} 
          />

          <SwordText 
            ref={swordTextRef}
            swordText={swordText}  
          />

          <Walls />

        </Suspense>
        <EffectComposer> 
          <PixelShader />
        </EffectComposer>

      </Canvas>

      {/* <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          pointerEvents: 'auto'
        }}>
        <NavBar />
      </div> */}
    </>
  );
};

export default ThreeScene;
