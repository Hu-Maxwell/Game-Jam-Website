import { useState, useEffect } from 'react'; 

import { gsap } from 'gsap'; 

import { CINEMATIC_START_POS, CINEMATIC_FINAL_POS } from "./../utils/constants";

const useScrollCamera = (camera, crown) => {
  // scrollProgress is a percentage of the the amount of scrolls done from 0 - 1
  const [scrollProgress, setScrollProgress ] = useState(0); 
  const maxScroll = 20; // 20 ticks of scrolling

  // sets scroll progress
  useEffect(() => {
    // note: when scrolling down, deltaY is positive. up is negative.
    if(scrollProgress >= 1) {
      return;
    }

    const handleWheel = (event) => {
      setScrollProgress(((scrollProgress * maxScroll) + (event.deltaY / 100)) / maxScroll);
    }; 
    window.addEventListener('wheel', handleWheel);

    console.log("biags" + scrollProgress);

    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrollProgress]); 

  // sets position
  useEffect(() => {
    if (!camera || !crown ) { return; }

    gsap.to(camera.position, {
      x: CINEMATIC_START_POS.x + (CINEMATIC_FINAL_POS.x - CINEMATIC_START_POS.x) * scrollProgress,
      y: CINEMATIC_START_POS.y + (CINEMATIC_FINAL_POS.y - CINEMATIC_START_POS.y) * scrollProgress,
      z: CINEMATIC_START_POS.z + (CINEMATIC_FINAL_POS.z - CINEMATIC_START_POS.z) * scrollProgress,
      duration: 0.5,
      ease: "power2.out",
    })
  }, [scrollProgress]);


}

export default useScrollCamera; 