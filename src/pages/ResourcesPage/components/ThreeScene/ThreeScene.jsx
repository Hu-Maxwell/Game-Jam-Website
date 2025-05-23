import { Suspense } from 'react';

import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from '@react-three/fiber';

import LoadingScreen from '../LoadingScreen/LoadingScreen';

import Camera from '../Primitives/Camera';

import Sword from '../Models/Sword';
import Hammer from '../Models/Hammer'
import Shield from '../Models/Shield';

import ArtTools from '../Details/ArtTools/ArtTools';
import GameEngines from '../Details/GameEngines/GameEngines';
import SoundTools from '../Details/SoundTools/SoundTools';

import PixelShader from "../PixelShader/PixelShader"
import { useSceneLogic } from '../../hooks/useSceneLogic';

import styles from "./three-scene.module.css";

const ThreeScene = () => {
  const {
    refs,
    handlers,
    state,
  } = useSceneLogic();

  const {
    isLoaded,
    setIsLoaded,
    groundLoaded,
    isItemSelected,
    gameToolsActive,
    artToolsActive,
    soundToolsActive,
  } = state;

  return (
    <>
      {!isLoaded && !groundLoaded && <LoadingScreen />}

      <div className={styles.parentContainer}>
        <div className={`${styles.threeContainer} ${isItemSelected ? styles.canvasShiftedLeft : styles.canvasCentered}`} >

          <Canvas className={styles.threeScene} pixelratio={Math.min(window.devicePixelRatio, 1.5)} >
            <Camera
              ref={refs.cameraRef}
              position={[25, 25, -35]}
              rotation={[0, Math.PI, 0]}
              fov={85}
              makeDefault
            />

            <ambientLight intensity={0.3} />

            <hemisphereLight skyColor={0xffffff} groundColor={0x444444} intensity={15} />

            <EffectComposer>
              <PixelShader />
            </EffectComposer>

            <Suspense fallback={null}>
              <Sword  ref={refs.swordRef}  onLoad={() => setIsLoaded(true)} onClick={handlers.handleSwordClick} />
              <Hammer ref={refs.hammerRef} onLoad={() => setIsLoaded(true)} onClick={handlers.handleHammerClick} />
              <Shield ref={refs.shieldRef} onLoad={() => setIsLoaded(true)} onClick={handlers.handleShieldClick} />
            </Suspense>
          </Canvas>
        </div>

        <div className={`${styles.details} ${isItemSelected ? styles.detailsActive : ''}`}>
          {gameToolsActive && <GameEngines />}
          {artToolsActive && <ArtTools />}
          {soundToolsActive && <SoundTools />}

          {!gameToolsActive && !artToolsActive && !soundToolsActive && isItemSelected && (
            <div>Select an item to see details.</div>
          )}

          {!isItemSelected && (
            <div className={styles.empty}>Click for details!</div>
          )}
        </div>
      </div>
    </>

  );
};

export default ThreeScene;
