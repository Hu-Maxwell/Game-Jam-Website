import { useRef, useEffect } from 'react'; 

import * as THREE from "three";
import { gsap } from 'gsap'; 

import { START_POS_ONE, FINAL_POS_ONE, START_POS_TWO, FINAL_POS_TWO } from "./../utils/constants";

const useScrollCamera = (camera) => {
  // #region scroll

  // scrollProgress is a percentage of the amount of scrolls done + current scroll phase 
  const scrollProgress = useRef(0); 
  const maxScroll = 20; // 20 ticks of scrolling
  let curScrollPhase = 1;

  const handleScrollPhase = () => {
    curScrollPhase = ~~(scrollProgress.current); 
  }

  // sets scroll progress
  // note: when scrolling down, deltaY is positive. up is negative.
  useEffect(() => {
    if(scrollProgress.current >= 1) { return; }

    const handleWheel = (event) => {
      scrollProgress.current = gsap.utils.clamp(0, 2, ((scrollProgress.current * maxScroll) + (event.deltaY / 100)) / maxScroll);
      handleScrollPhase();
      animateScene();
    }; 
    window.addEventListener('wheel', handleWheel);

    return () => window.removeEventListener('wheel', handleWheel);
  }, []); 
  // #endregion

  const animateScene = () => {
    if (!camera) return;

    animateCamera();
  }

  // #region camera

  const animateCamera = () => {
    handleCameraPos(); 
  }

  const handleCameraPos = () => { 
    if (curScrollPhase === 0) {
      gsap.to(camera.current.position, {
        x: START_POS_ONE.x + (FINAL_POS_ONE.x - START_POS_ONE.x) * scrollProgress.current,
        y: START_POS_ONE.y + (FINAL_POS_ONE.y - START_POS_ONE.y) * scrollProgress.current,
        z: START_POS_ONE.z + (FINAL_POS_ONE.z - START_POS_ONE.z) * scrollProgress.current,
        duration: 0.5,
        ease: "power2.out",
      })
    } else if (curScrollPhase === 1) {
      const newScrollProgress = scrollProgress.current - 1;
      gsap.to(camera.current.position, {
        x: START_POS_TWO.x + (FINAL_POS_TWO.x - START_POS_TWO.x) * newScrollProgress,
        y: START_POS_TWO.y + (FINAL_POS_TWO.y - START_POS_TWO.y) * newScrollProgress,
        z: START_POS_TWO.z + (FINAL_POS_TWO.z - START_POS_TWO.z) * newScrollProgress,
        duration: 2,  
        ease: "power2.out",
      });
    }

  };
    
  // #endregion

}

export default useScrollCamera; 