import { useState, useRef, Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { EffectComposer } from "@react-three/postprocessing";

import Camera from "./Primitives/Camera";
import Backdrop from "./Scene/Backdrop";
import Tower from "./Tower/Tower";
import Walls from "./Scene/Walls";
import PixelShader from "./PixelShader/PixelShader";

import Slider from "./Slider/Slider";

const ThreeScene = ({ props }) => {
  const towerRef = useRef(null);
  
  const [time, setTime] = useState(0); 

  return (
    <>
      <Canvas
        pixelratio={window.devicePixelRatio}
        style={{ width: '100vw', height: '100vh' }}
      >
        <Camera 
          position={[0, 20, -20]}
          rotation={[-Math.PI / 6, Math.PI, 0]}
          fov={85}
        />

        <spotLight 
          position={[0, 65, -25]}   
          angle={Math.PI / 2}
          penumbra={0.5}  
          intensity={4000}  
          castShadow
        />

        <EffectComposer> 
          <PixelShader time={time} />
        </EffectComposer> 

        <Suspense fallback={null}> 
          <Backdrop time={time} />
          <Tower ref={towerRef} time={time} />
        </Suspense>
      </Canvas>

      {/* slider */}
      <Slider time={time} setTime={setTime} />
    </>
  );
};

export default ThreeScene;
