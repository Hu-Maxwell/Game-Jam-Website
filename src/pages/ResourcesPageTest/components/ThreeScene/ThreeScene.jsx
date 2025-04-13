import { useState, Suspense, useEffect, useRef, useMemo } from 'react';
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
import { useSpring, config } from '@react-spring/three'; // Import react-spring
import { Object3D } from 'three';


const ThreeScene = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [groundLoaded, setGroundLoaded] = useState(false);
  const [artToolsActive, setArtToolsActive] = useState(false);
  const [gameToolsActive, setGameToolsActive] = useState(false);
  const [soundToolsActive, setSoundToolsActive] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);
  const spotLightTargetObj = useMemo(() => new Object3D(), []);
  const swordRef = useRef(null);
  const cameraRef = useRef(null);
  const lightRef = useRef(null);
  const hammerRef = useRef(null);
  const shieldRef = useRef(null);
  
  /*Animation logic */
  const initialState = {
    sword: { position: [15, 30, -10], rotation: [0, Math.PI / 2, 0], scale: [4, 4, 4] },
    hammer: { position: [20, 20, -10], rotation: [0, Math.PI / 2 + 1, 0], scale: [0.2, 0.2, 0.2] },
    shield: { position: [10, 25, -10], rotation: [0, Math.PI / 2 + 0.5, 0], scale: [0.13, 0.13, 0.13] },
    canvasWidth: '100vw',
    lightTargetPos: [15, 25, -10],
  };

  const targetState = {
    sword: { position: [30, 33, -5], rotation: [Math.PI, Math.PI - 0.25, -Math.PI + 0.5], scale: [6, 6, 6] },
    hammer: { position: [25.6, 24.5, -32], rotation: [Math.PI, Math.PI + 0.5, -Math.PI + 0.5], scale: [0.02, 0.02, 0.02] },
    shield: { position: [25.5, 23.4, -32], rotation: [Math.PI + 1, -Math.PI / 16, -Math.PI + 0.5], scale: [0.02, 0.02, 0.02] },
    canvasWidth: '50vw',
    lightTargetPos: [23, 35, 0],
  };

  const [swordSpring, swordApi] = useSpring(() => ({
    ...initialState.sword,
    config: config.gentle, 
  }));
  const [hammerSpring, hammerApi] = useSpring(() => ({
    ...initialState.hammer,
    config: config.gentle,
  }));
  const [shieldSpring, shieldApi] = useSpring(() => ({
    ...initialState.shield,
    config: config.gentle,
  }));

  useEffect(() => {
    const stateToUse = isItemSelected ? targetState : initialState;
    swordApi.start(stateToUse.sword);
    hammerApi.start(stateToUse.hammer);
    shieldApi.start(stateToUse.shield);
  }, [isItemSelected, swordApi, hammerApi, shieldApi]);

  const handleItemClick = (itemSetter) => {
    setIsItemSelected(true);
    setGameToolsActive(itemSetter === setGameToolsActive);
    setArtToolsActive(itemSetter === setArtToolsActive);
    setSoundToolsActive(itemSetter === setSoundToolsActive);
  };

  useEffect(() => {
    const targetPos = isItemSelected ? targetState.lightTargetPos : initialState.lightTargetPos;
    spotLightTargetObj.position.set(...targetPos);
  }, [isItemSelected, spotLightTargetObj, initialState.lightTargetPos, targetState.lightTargetPos]);

  useEffect(() => {
    setIsLoaded(false)
    setGroundLoaded(false)


  }, [])

  const handleSwordClick = (e) => {
    e.stopPropagation();
      handleItemClick(setGameToolsActive); 
  };

  const handleHammerClick = (e) => {
      e.stopPropagation();
      handleItemClick(setArtToolsActive);
  };

  const handleShieldClick = (e) => {
      e.stopPropagation();
      handleItemClick(setSoundToolsActive); 
  };


  return (
    <main style={{ display: "flex" }}>
      {!isLoaded && !groundLoaded && <LoadingScreen />} 
      <div
        style={{
          width: isItemSelected ? targetState.canvasWidth : initialState.canvasWidth,
          height: '120vh', 
          transition: 'width 0.7s ease-in-out',
          position: 'relative',
        }}
      >
        <Canvas
          pixelRatio={window.devicePixelRatio}
          style={{
            display: 'block', // Ensure canvas fills the div
            width: '100%',
            height: '120vh',
          }}
          gl={{ alpha: true }}
          shadows
        >
          
          <EffectComposer>
            <PixelShader />
          </EffectComposer> 

          <Suspense fallback={null}> 
            
            <Camera
                ref={cameraRef}
                position={[25, 25, -35]}
                rotation={[0, Math.PI, 0]}
                fov={85}
                makeDefault
            />
            <ambientLight intensity={0.3} />
            <spotLight
              ref={lightRef}
              target={spotLightTargetObj}
              position={[35, 55, 10]}
              angle={Math.PI / 2} // Adjusted angle
              penumbra={0.5}
              intensity={1500}
              distance={800}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />

            <Sword
              ref={swordRef}
              {...swordSpring}
              onLoad={() => setIsLoaded(true)} // Manage loading state
              onClick={handleSwordClick}
            />

            <Hammer
              ref={hammerRef}
              {...hammerSpring}
              onLoad={() => setIsLoaded(true)}
              onClick={handleHammerClick}
            />

            <Shield
              ref={shieldRef}
              {...shieldSpring}
              onLoad={() => setIsLoaded(true)}
              onClick={handleShieldClick}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className='details'>
        {gameToolsActive && <Game_Engines_Display_Container />}
        {artToolsActive && <Art_Tools_Display_Container />}
        {soundToolsActive && <Sound_Tools_Display_Container />}
        {!gameToolsActive && !artToolsActive && !soundToolsActive && isItemSelected &&
           <div>Select an item to see details.</div> // Placeholder if needed
        }
         {!isItemSelected &&
           <div style={{textAlign: 'center', paddingTop: '50px'}}>Click an item to learn more.</div> // Message for initial state
        }
      </div>
          
    </main>
  );
};

export default ThreeScene;
