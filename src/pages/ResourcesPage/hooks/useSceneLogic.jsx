import { useState, useLayoutEffect, useEffect, useRef, useMemo } from 'react';
import { Object3D } from 'three';
import gsap from 'gsap';

// Helper function to set scale recursively.
const setRecursiveScale = (object, scaleArr) => {
  object.scale.set(...scaleArr);
  object.children.forEach((child) => setRecursiveScale(child, scaleArr));
};

export const useSceneLogic = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [groundLoaded, setGroundLoaded] = useState(false);
  const [artToolsActive, setArtToolsActive] = useState(false);
  const [gameToolsActive, setGameToolsActive] = useState(false);
  const [soundToolsActive, setSoundToolsActive] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);

  const spotLightTargetObj = useMemo(() => new Object3D(), []);

  const swordRef = useRef(null);
  const cameraRef = useRef(null);
  const lightRef = useRef(null);
  const hammerRef = useRef(null);
  const shieldRef = useRef(null);

  const initialState = {
    sword: {
      position: [15, 30, -10],
      rotation: [0, Math.PI / 2, 0],
      scale: [4, 4, 4],
    },
    hammer: {
      position: [20, 20, -10],
      rotation: [0, Math.PI / 2 + 1, 0],
      scale: [0.1, 0.1, 0.1],
    },
    shield: {
      position: [10, 25, -10],
      rotation: [0, Math.PI / 2 + 0.5, 0],
      scale: [4, 4, 4],
    },
    lightTargetPos: [15, 25, -10],
  };

  const targetState = {
    sword: {
      position: [30, 33, -5],
      rotation: [Math.PI, Math.PI - 0.25, -Math.PI + 0.5],
      scale: [6, 6, 6],
    },
    hammer: {
      position: [25.6, 24.5, -32],
      rotation: [Math.PI, Math.PI + 0.5, -Math.PI + 0.5],
      scale: [0.02, 0.02, 0.02],
    },
    shield: {
      position: [25.5, 23.4, -32],
      rotation: [Math.PI + 1, -Math.PI / 16, -Math.PI + 0.5],
      scale: [0.6, 0.6, 0.6],
    },
    lightTargetPos: [23, 35, 0],
  };

  const animationDuration = 1; 
  const easeType = "power1.out";

  useLayoutEffect(() => {
    setIsLoaded(false);
    setGroundLoaded(false);

    if (swordRef.current) {
      swordRef.current.position.set(...initialState.sword.position);
      swordRef.current.rotation.set(...initialState.sword.rotation);
      swordRef.current.scale.set(...initialState.sword.scale);
    }

    if (hammerRef.current) {
      // Use recursive scaling in case the hammer is a nested object.
      setRecursiveScale(hammerRef.current, initialState.hammer.scale);
      hammerRef.current.position.set(...initialState.hammer.position);
      hammerRef.current.rotation.set(...initialState.hammer.rotation);
    }

    if (shieldRef.current) {
      shieldRef.current.position.set(...initialState.shield.position);
      shieldRef.current.rotation.set(...initialState.shield.rotation);
      shieldRef.current.scale.set(...initialState.shield.scale);
    }

    spotLightTargetObj.position.set(...initialState.lightTargetPos);
  }, []); 

  useEffect(() => {
    const stateToUse = isItemSelected ? targetState : initialState;

    if (swordRef.current) {
      gsap.to(swordRef.current.position, {
        duration: animationDuration,
        x: stateToUse.sword.position[0],
        y: stateToUse.sword.position[1],
        z: stateToUse.sword.position[2],
        ease: easeType,
      });
      gsap.to(swordRef.current.rotation, {
        duration: animationDuration,
        x: stateToUse.sword.rotation[0],
        y: stateToUse.sword.rotation[1],
        z: stateToUse.sword.rotation[2],
        ease: easeType,
      });
      gsap.to(swordRef.current.scale, {
        duration: animationDuration,
        x: stateToUse.sword.scale[0],
        y: stateToUse.sword.scale[1],
        z: stateToUse.sword.scale[2],
        ease: easeType,
      });
    }

    if (hammerRef.current) {
      gsap.to(hammerRef.current.position, {
        duration: animationDuration,
        x: stateToUse.hammer.position[0],
        y: stateToUse.hammer.position[1],
        z: stateToUse.hammer.position[2],
        ease: easeType,
      });
      gsap.to(hammerRef.current.rotation, {
        duration: animationDuration,
        x: stateToUse.hammer.rotation[0],
        y: stateToUse.hammer.rotation[1],
        z: stateToUse.hammer.rotation[2],
        ease: easeType,
      });
      gsap.to(hammerRef.current.scale, {
        duration: animationDuration,
        x: stateToUse.hammer.scale[0],
        y: stateToUse.hammer.scale[1],
        z: stateToUse.hammer.scale[2],
        ease: easeType,
      });

    }

    // Shield animation
    if (shieldRef.current) {
      gsap.to(shieldRef.current.position, {
        duration: animationDuration,
        x: stateToUse.shield.position[0],
        y: stateToUse.shield.position[1],
        z: stateToUse.shield.position[2],
        ease: easeType,
      });
      gsap.to(shieldRef.current.rotation, {
        duration: animationDuration,
        x: stateToUse.shield.rotation[0],
        y: stateToUse.shield.rotation[1],
        z: stateToUse.shield.rotation[2],
        ease: easeType,
      });
      gsap.to(shieldRef.current.scale, {
        duration: animationDuration,
        x: stateToUse.shield.scale[0],
        y: stateToUse.shield.scale[1],
        z: stateToUse.shield.scale[2],
        ease: easeType,
      });
    }
  }, [isItemSelected]);

  useEffect(() => {
    const targetPos = isItemSelected ? targetState.lightTargetPos : initialState.lightTargetPos;
    gsap.to(spotLightTargetObj.position, {
      duration: animationDuration,
      x: targetPos[0],
      y: targetPos[1],
      z: targetPos[2],
      ease: easeType,
    });
  }, [isItemSelected, spotLightTargetObj]);

  useEffect(() => {
    setIsLoaded(false);
    setGroundLoaded(false);
  }, []);

  const handleItemClick = (itemSetter) => {
    setIsItemSelected(true);
    setGameToolsActive(itemSetter === setGameToolsActive);
    setArtToolsActive(itemSetter === setArtToolsActive);
    setSoundToolsActive(itemSetter === setSoundToolsActive);
  };

  const handleSwordClick = (e) => {
    e.stopPropagation();
    handleItemClick(setGameToolsActive);
  };

  const handleHammerClick = (e) => {
    e.stopPropagation();
    handleItemClick(setArtToolsActive);
  };

  const handleShieldClick = (e) => {
    e.stopPropagation();
    handleItemClick(setSoundToolsActive);
  };

  return {
    refs: {
      swordRef,
      cameraRef,
      lightRef,
      hammerRef,
      shieldRef,
    },
    spotlight: spotLightTargetObj,
    handlers: {
      handleSwordClick,
      handleHammerClick,
      handleShieldClick,
    },
    state: {
      isLoaded,
      setIsLoaded,
      groundLoaded,
      setGroundLoaded,
      isItemSelected,
      gameToolsActive,
      artToolsActive,
      soundToolsActive,
    },
  };
};
