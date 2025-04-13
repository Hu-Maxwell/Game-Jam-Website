import { useState, useEffect, useRef, Suspense } from 'react';

import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from '@react-three/fiber';

import NavBar from "@/components/NavBar/NavBar";

import LoadingScreen from "../Hammer/LoadingScreen/LoadingScreen";
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
  const [loadedCount, setLoadedCount] = useState(0);
  const [swordText, setSwordText] = useState("");
  const [showNavBar, setShowNavBar] = useState(false);

  const cameraRef = useRef(null);
  const lightRef = useRef(null); 
  const anvilRef = useRef(null);
  const hammerRef = useRef(null);
  const swordRef = useRef(null);
  const swordTextRef = useRef(null); 

  const hammerClickedRef = useRef(false); 

  useClick(hammerClickedRef, swordRef, swordTextRef, setSwordText, cameraRef, setShowNavBar);
  useMoveCamera(cameraRef); 

  // makes it so spotlight can't point at null 
  useEffect(() => {
    if (lightRef.current && anvilRef.current && loadedCount === 3) {
      lightRef.current.target = anvilRef.current;
    }
  }, [loadedCount]); 

  // shows navbar if scene already played
  useEffect(() => {
    if (!localStorage.getItem("hasSeenScene")) {
      setShowNavBar(true); 
    }
  }, [loadedCount]);

  return (
    <>
      {(loadedCount < 3) && <LoadingScreen />} 

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          pointerEvents: 'auto',
          opacity: showNavBar ? 1 : 0,
          transition: showNavBar ? 'opacity 1s ease-in-out' : 'none',
        }}
      >
        <NavBar />
      </div>

      <Canvas
        pixelratio={window.devicePixelRatio}
        style={{ width: '100vw', height: '100vh' }}
      >
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

        <EffectComposer> 
          <PixelShader />
        </EffectComposer>

        <Suspense fallback={null}> 
          <Ground /> 

          <Anvil
            ref={anvilRef}
            position={[0, .5, 0]}  
            rotation={[0, 0, 0]}
            scale={1.5}
            onLoad={() => setLoadedCount(prev => prev + 1)} 
          />

          <Hammer 
            ref={hammerRef}
            hammerClicked={hammerClickedRef}
            position={[-1, 3.4, -1]}  
            rotation={[1, Math.PI / 2, 0]}
            scale={.03}
            onLoad={() => setLoadedCount(prev => prev + 1)} 
          />

          <Sword 
            ref={swordRef}
            position={[1, 3.8, 0]}  
            rotation={[0, 0, Math.PI / 2]}
            scale={[2, 3, 3]}
            onLoad={() => setLoadedCount(prev => prev + 1)} 
          />

          <SwordText 
            ref={swordTextRef}
            swordText={swordText}
          />

          <Walls />

        </Suspense>

      </Canvas>
    </>
  );
};

export default ThreeScene;
