import { useState, useEffect, useRef } from 'react';

import { gsap } from 'gsap';

const useClick = (hammerClicked, sword, swordText, setSwordText, camera) => {
  const fullText = "MercedJam";
  const currentIndex = useRef(0);
  const lastClickTime = useRef(0);

  let [finalClick, setFinalClick] = useState(false); 

  useEffect(() => {
    const handleClick = () => {
      const now = performance.now();
      if (now - lastClickTime.current < 1000) return; 
      lastClickTime.current = now;


      if (currentIndex.current < fullText.length) {
        hammerClicked.current = true;

        const nextChar = fullText[currentIndex.current];
        setSwordText(prev => prev + nextChar);
        currentIndex.current++;

        setTimeout(() => {
          gsap.to(sword.current.position, {
            x: "+=0.25", // move right by 0.5 units
            duration: 0.5,
            ease: 'power2.out',
          });

          gsap.to(swordText.current.position, {
            x: "+=0.25", // same relative move
            duration: 0.5,
            ease: 'power2.out',
          });
        }, 500);
      } 
      
      console.log(currentIndex.current > fullText.length - 1 && !finalClick);
      // fullText.length - 1 cuz it'd do this animation on a click after the text finishes 
      if (currentIndex.current > fullText.length - 1 && !finalClick) {
        finalClick = true; 
        gsap.to(camera.current.position, {
          y: camera.current.position.y + .5,
          z: camera.current.position.z + .25,
          duration: 3.5,
          ease: 'power2.inOut',
        });

        // show buttons
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
};

export default useClick;
