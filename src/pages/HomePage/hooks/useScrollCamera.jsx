import { useRef, useEffect } from 'react'; 

import * as THREE from "three";

import { gsap } from 'gsap'; 
import { useGLTF } from '@react-three/drei';


import { START_POS_ONE, FINAL_POS_ONE, START_POS_TWO, FINAL_POS_TWO } from "./../utils/constants";

const useScrollCamera = (camera, crown) => {
  // scrollProgress is a percentage of the the amount of scrolls done from 0 - 1
  const scrollProgress = useRef(0); 
  const maxScroll = 20; // 20 ticks of scrolling
  let curScrollPhase = 1;

  // sets position
  const animateCamera = () => {
    if (!camera || !crown ) { return; }



    // curScrollPhase manager: changes curScrollPhase and resets scrollProgress 
    if (scrollProgress.current >= 1) { 
      scrollProgress.current = 0; 

      if (curScrollPhase === 1) { curScrollPhase = 2; } 
      else if (curScrollPhase === 2) { curScrollPhase = 3; }
    }

    // manages rotating crown phase
    // this is incorrect. i want to be able to get the angle threshold given where the camera is looking, and comparing it with where the crown is looking. 
    // what i am doing rn is just getting the angle between camera and crown.
    // so to fix, take the camera's angle and pos, and draw a vector to the crown
    // then, 
    if (curScrollPhase == 3) {
      const directionOne = new THREE.Vector3();
      camera.current.getWorldDirection(directionOne);
      const angle1 = THREE.MathUtils.radToDeg(Math.atan2(directionOne.x, directionOne.z)); 

      const directionTwo = new THREE.Vector3();
      crown.current.getWorldDirection(directionTwo);
      const angle2 = THREE.MathUtils.radToDeg(Math.atan2(directionTwo.x, directionTwo.z)); 
      
      const angleDiff = angle1 - angle2;
      // keep between -180 and 180
      const deltaAngle = ((angleDiff + 180) % 360 + 360) % 360 - 180; 

      // if looking at back of crown
      if (deltaAngle > -140 && deltaAngle < -90) {
        console.log("good");
      }
    }


    // animation manager
    if (curScrollPhase == 1) { animateCameraOne(); } 
    else if (curScrollPhase == 2) { animateCameraTwo(); }
    else if (curScrollPhase == 3 ) { animateCameraThree(); }
  }

  const animateCameraOne = () => {  
    gsap.to(camera.current.position, {
      x: START_POS_ONE.x + (FINAL_POS_ONE.x - START_POS_ONE.x) * scrollProgress.current,
      y: START_POS_ONE.y + (FINAL_POS_ONE.y - START_POS_ONE.y) * scrollProgress.current,
      z: START_POS_ONE.z + (FINAL_POS_ONE.z - START_POS_ONE.z) * scrollProgress.current,
      duration: 0.5,
      ease: "power2.out",
    })
  };

  // kinda bad cuz i copied and pasted but whatever 
  const animateCameraTwo = () => {
    gsap.to(camera.current.position, {
      x: START_POS_TWO.x + (FINAL_POS_TWO.x - START_POS_TWO.x) * scrollProgress.current,
      y: START_POS_TWO.y + (FINAL_POS_TWO.y - START_POS_TWO.y) * scrollProgress.current,
      z: START_POS_TWO.z + (FINAL_POS_TWO.z - START_POS_TWO.z) * scrollProgress.current,
      duration: 0.5,
      ease: "power2.out",
    })
  }

  // rotates crown
  const animateCameraThree = () => {
    crown.current.rotation.y += .1; 
  }

  // sets scroll progress
  // note: when scrolling down, deltaY is positive. up is negative.
  useEffect(() => {
    if(scrollProgress.current >= 1) { return; }

    const handleWheel = (event) => {
      scrollProgress.current = gsap.utils.clamp(0, 2, ((scrollProgress.current * maxScroll) + (event.deltaY / 100)) / maxScroll);
      animateCamera();
    }; 
    window.addEventListener('wheel', handleWheel);

    return () => window.removeEventListener('wheel', handleWheel);
  }, []); 
}

export default useScrollCamera; 