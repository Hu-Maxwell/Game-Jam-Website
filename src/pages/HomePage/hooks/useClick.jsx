import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

const useClick = (hammerClicked, sword, swordText, setSwordText) => {
  const fullText = "MercedJam2025";
  const currentIndex = useRef(0);
  const lastClickTime = useRef(0);

  useEffect(() => {
    const handleClick = () => {
      const now = performance.now();
      if (now - lastClickTime.current < 1000) return; 
      lastClickTime.current = now;

      hammerClicked.current = true;

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



      if (currentIndex.current < fullText.length) {
        const nextChar = fullText[currentIndex.current];
        setSwordText(prev => prev + nextChar);
        currentIndex.current++;
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
};

export default useClick;
