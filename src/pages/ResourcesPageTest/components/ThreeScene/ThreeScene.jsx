import { useState, Suspense, useEffect, useRef, useMemo } from 'react';

import { Object3D } from 'three';
import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { useSpring, config } from '@react-spring/three'; 

import LoadingScreen from '../LoadingScreen/LoadingScreen';

import Sword from '../Models/Sword';
import Camera from '../../../HomePage/components/Camera/Camera';
import Hammer from '../Models/Hammer'
import ArtTools from '../ArtTools/ArtTools';
import GameEngines from '../GameEngines/display_container';
import SoundTools from '../SoundTools/display_container';
import Shield from '../Models/shield';

import PixelShader from "../../../HomePage/components/PixelShader/PixelShader"

import { useSceneLogic } from './../../hooks/useSceneLogic';
import styles from "./three-scene.module.css";

const ThreeScene = () => {
  const {
    refs,
    springProps,
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

            <spotLight
              ref={refs.lightRef}
              position={[35, 55, 10]}
              angle={Math.PI / 2}
              penumbra={0.5}
              intensity={1500}
            />

            {/* <EffectComposer>
              <PixelShader />
            </EffectComposer> */}

            <Suspense fallback={null}>
              <Sword ref={refs.swordRef} {...springProps.swordSpring} onLoad={() => setIsLoaded(true)} onClick={handlers.handleSwordClick} />
              <Hammer ref={refs.hammerRef} {...springProps.hammerSpring} onLoad={() => setIsLoaded(true)} onClick={handlers.handleHammerClick} />
              <Shield ref={refs.shieldRef} {...springProps.shieldSpring} onLoad={() => setIsLoaded(true)} onClick={handlers.handleShieldClick} />
            </Suspense>
          </Canvas>
        </div>

        <div className={styles.details}>
          {gameToolsActive && <GameEngines />}
          {artToolsActive && <ArtTools />}
          {soundToolsActive && <SoundTools />}

          {!gameToolsActive && !artToolsActive && !soundToolsActive && isItemSelected && (
            <div>Select an item to see details.</div>
          )}

          {!isItemSelected && (
            <div className={styles.empty}> Click for details! </div>
          )}

        </div>
      </div>
    </>

  );
};

export default ThreeScene;
