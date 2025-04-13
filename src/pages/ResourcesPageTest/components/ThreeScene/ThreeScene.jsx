import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

import "./styles.css";
import Ground from '../Ground/Ground';
import Workshop_Path_Buildings from '../Scene_Paths/Workshop-Path';
import Game_Engine_Path_Buildings from '../Scene_Paths/Game-Engine-Path'
import Fountain from '../resourcespage_buildings/fountain';
import Sound_Tools_Path_Buildings from '../Scene_Paths/Sound-Tools-Path';
import Art_Tools_Path_Buildings from '../Scene_Paths/Art-Tools-Path';
import { ResourcesCamera } from '../Camera/Camera';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import NavBar from '../../../../components/NavBar/NavBar'; 
import PixelShader from "../../../HomePage/components/PixelShader/PixelShader"

const ThreeScene = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [groundLoaded, setGroundLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false)
    setGroundLoaded(false)
  }, [])

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
      >

        <EffectComposer>
          <PixelShader />
        </EffectComposer>
        <Suspense fallback={null}> 
          <Ground setGroundLoaded={setGroundLoaded}/>
            <Workshop_Path_Buildings/>
            <Fountain 
                scale={[0.25, 0.25, 0.25]} 
                position={[0, 0, 0]} 
            /> 
            <Game_Engine_Path_Buildings />
            <Sound_Tools_Path_Buildings />
            <Art_Tools_Path_Buildings/>                     
            <ambientLight intensity={0.5} />
            <directionalLight 
                position={[5, 10, 5]} 
                intensity={1} 
                castShadow 
                shadow-mapSize={[2048, 2048]} 
            />
            <ResourcesCamera />
            
        </Suspense>
        
      </Canvas>
    </>
  );
};

export default ThreeScene;
