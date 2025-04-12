import { useState, useEffect, useRef } from 'react';

import { gsap } from 'gsap';

const useClick = (hammerClicked, sword, swordText, setSwordText, camera, setShowNavBar, setShowFooter) => {
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
      
      if (currentIndex.current > fullText.length - 1 && !finalClick) {
        finalClick = true; 
        gsap.to(camera.current.position, {
          y: camera.current.position.y + .5,
          z: camera.current.position.z + .25,
          duration: 3.5,
          ease: 'power2.inOut',
        });

        gsap.to(camera.current.rotation, {
          x: 1,
          duration: 5,
          ease: 'power1.inOut'
        });

        setShowNavBar(true); 
        setShowFooter(true);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
};

export default useClick;
