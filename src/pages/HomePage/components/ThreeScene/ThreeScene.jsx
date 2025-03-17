import { useState, useRef, Suspense } from 'react';

import { Canvas } from '@react-three/fiber';

import LoadingScreen from "./../LoadingScreen/LoadingScreen";
import Camera from "./../Camera/Camera";
import Ground from "./../Ground/Ground";
import Crown from "./../Crown/Crown";

const ThreeScene = ({ props }) => {
  // have meshes set isLoaded to true
  const [isLoaded, setIsLoaded] = useState(false);

  const cameraRef = useRef(null);

  return (
    <>
      {/* if not loaded, then display the loading screen */}
      {!isLoaded && <LoadingScreen />} 

      <Canvas
        pixelratio={window.devicePixelRatio}
        style={{ width: '100vw', height: '100vh' }}
      >
        <Suspense fallback={null}> 

          <Camera />

          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          <Ground />
          <Crown
            ref={crownRef}
            position={[0, 5, 10]}  
            scale={1.5}
            onLoad={() => setIsLoaded(true)}
          />

        </Suspense>
      </Canvas>
    </>
  );
};

export default ThreeScene;
