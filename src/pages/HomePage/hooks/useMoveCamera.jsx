import { useEffect } from 'react';
import { gsap } from 'gsap';
import { START_POS_ONE, FINAL_POS_ONE } from './../utils/constants';

const useMoveCamera = (camera) => {
  useEffect(() => {
    if (!camera.current) return;

    console.log(camera.current);

    camera.current.position.set(START_POS_ONE.x, START_POS_ONE.y, START_POS_ONE.z);

    gsap.to(camera.current.position, {
      x: FINAL_POS_ONE.x,
      y: FINAL_POS_ONE.y,
      z: FINAL_POS_ONE.z,
      duration: 5,
      ease: 'power1.inOut'
    });
  }, [camera.current]);
};

export default useMoveCamera;
