import { useState, useEffect } from 'react'; 

import { CINEMATIC_START_POS, CINEMATIC_FINAL_POS } from "./../utils/constants";

const useScrollCamera = (camera, crown) => {
  // scrollProgress goes from 0 - 100
  const [scrollProgress, setScrollProgress ] = useState(0); 
  const maxScrollProgress = Math.abs(CINEMATIC_START_POS.z - CINEMATIC_FINAL_POS.z); 
  const initialCameraPosZ = CINEMATIC_START_POS.z;  

  // sets scroll progress
  useEffect(() => {
    // note: when scrolling down, deltaY is positive. up is negative.
    const handleWheel = (event) => {
      setScrollProgress(scrollProgress + (event.deltaY / 100));
    }; 
    window.addEventListener('wheel', handleWheel);

    console.log("biags" + scrollProgress);

    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrollProgress]); 

  // sets position
  useEffect(() => {
    // because ref is null at start
    if(!camera || !crown) {
      return; 
    }

    // some readable math that calculates the camera's new z pos from scroll 
    if (maxScrollProgress > scrollProgress) {
      const direction = Math.sign(CINEMATIC_FINAL_POS.z - CINEMATIC_START_POS.z); 
      const dist = Math.abs(CINEMATIC_FINAL_POS.z - CINEMATIC_START_POS.z); 
      const percentage = scrollProgress / maxScrollProgress; 
      const deltaZ = percentage * dist;
    
      const newZ = initialCameraPosZ + (deltaZ * direction); 

      camera.position.set(camera.position.x, camera.position.y, newZ) 

      console.log("camPos" + camera.position.z);
    }
  }, [scrollProgress])


}

export default useScrollCamera; 