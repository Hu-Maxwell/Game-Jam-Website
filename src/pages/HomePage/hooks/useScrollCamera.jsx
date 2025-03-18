import { useState, useEffect } from 'react'; 

import { gsap } from 'gsap'; 

import { START_POS_ONE, FINAL_POS_ONE } from "./../utils/constants";

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
      x: START_POS_ONE.x + (FINAL_POS_ONE.x - START_POS_ONE.x) * scrollProgress,
      y: START_POS_ONE.y + (FINAL_POS_ONE.y - START_POS_ONE.y) * scrollProgress,
      z: START_POS_ONE.z + (FINAL_POS_ONE.z - START_POS_ONE.z) * scrollProgress,
      duration: 0.5,
      ease: "power2.out",
    })
  }, [scrollProgress]);

  // if scroll to position 1 is done, start scroll from position 1 to position 2 
  useEffect(() => {
    // 
  }, [])


  // if scroll to position 2 is done, then start rotating crown 
  useEffect(() => {
    // 
  }, [])


}

export default useScrollCamera; 