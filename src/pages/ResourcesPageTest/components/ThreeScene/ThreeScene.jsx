import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';


import "./styles.css";
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import PixelShader from "../../../HomePage/components/PixelShader/PixelShader"
import Sword from '../Sword/Sword';
import Camera from '../../../HomePage/components/Camera/Camera';
import Hammer from '../Hammer/Hammer'
import Art_Tools_Display_Container from '../art_tools_display/display_container';
import Game_Engines_Display_Container from '../game_engines_display/display_container';
import Sound_Tools_Display_Container from '../sound_tools_display/display_container';
import Shield from '../shield/shield';

const ThreeScene = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [groundLoaded, setGroundLoaded] = useState(false);
  const [artToolsActive, setArtToolsActive] = useState(false);
  const [gameToolsActive, setGameToolsActive] = useState(false);
  const [soundToolsActive, setSoundToolsActive] = useState(false);
  const swordRef = useRef(null);
  const cameraRef = useRef(null);
  const lightRef = useRef(null);
  const hammerRef = useRef(null);
  const shieldRef = useRef(null);
  const hammerClickedRef = useRef(null)
  const spotlightTargetRef = useRef(null)
  

  useEffect(() => {
    setIsLoaded(false)
    setGroundLoaded(false)


  }, [])

  function handleSwordClick() {
    setArtToolsActive(false);
    setGameToolsActive(true);
    setSoundToolsActive(false)
  }

  function handleHammerClick() {
    setArtToolsActive(false);
    setGameToolsActive(false);
    setSoundToolsActive(true)
  }

  function handleShieldClick() {
    setArtToolsActive(true);
    setGameToolsActive(false);
    setSoundToolsActive(false)
  }


  return (
    <>
      {!isLoaded && !groundLoaded && <LoadingScreen />} 
      <Canvas
        pixelRatio={window.devicePixelRatio}
        style={{
          width: '100%',
          height: '120vh', // Or your desired fixed height
       }}
        gl={{ alpha: true }}
        shadows
      >

        {/*<EffectComposer>
          <PixelShader />
        </EffectComposer>*/}

        <Suspense fallback={null}> 
          <Camera 
            ref={cameraRef}
            position={[25, 25, -35]}
            rotation={[0, Math.PI, 0]}
            fov={85}
          />

          <spotLight
            ref={lightRef}
            position={[51, 45, 10]} // Position above and slightly in front of the sword
            angle={Math.PI } // Narrower angle (45 degrees instead of 180)
            penumbra={0.5}
            intensity={500} 
            distance={200} 
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <Sword 
            ref={swordRef}
            position={[50, 35, -5]}  
            rotation={[Math.PI, Math.PI, -Math.PI + 0.5]}
            scale={[6, 6, 6]}
            onLoad={() => setIsLoaded(true)} 
            onClick={handleSwordClick}
          />

          <Hammer
            ref={hammerRef}
            hammerClicked={hammerClickedRef}
            position={[27.6, 24.5, -32]}  
            rotation={[Math.PI, Math.PI, -Math.PI + 0.5]}
            scale={.02}
            onLoad={() => setIsLoaded(true)}
            onClick={handleHammerClick}
          />

          <Shield
            ref={shieldRef}
            position={[27.5, 23.4, -32]}  
            rotation={[Math.PI, Math.PI, -Math.PI + 0.5]}
            scale={.02}
            onLoad={() => setIsLoaded(true)}
            onClick={handleShieldClick}
          />

          {gameToolsActive ? (
            <Game_Engines_Display_Container />
          ) : artToolsActive ? (
            <Art_Tools_Display_Container />
          ) : soundToolsActive && (
            <Sound_Tools_Display_Container/>
          )}

        </Suspense>
        
      </Canvas>
    </>
  );
};

export default ThreeScene;
