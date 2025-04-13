import { useState, useEffect, useRef, useMemo } from 'react';
import { Object3D } from 'three';
import { useSpring, config } from '@react-spring/three';

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
    sword: { position: [15, 30, -10], rotation: [0, Math.PI / 2, 0], scale: [4, 4, 4] },
    hammer: { position: [20, 20, -10], rotation: [0, Math.PI / 2 + 1, 0], scale: [0.2, 0.2, 0.2] },
    shield: { position: [10, 25, -10], rotation: [0, Math.PI / 2 + 0.5, 0], scale: [0.13, 0.13, 0.13] },
    lightTargetPos: [15, 25, -10],
  };

  const targetState = {
    sword: { position: [30, 33, -5], rotation: [Math.PI, Math.PI - 0.25, -Math.PI + 0.5], scale: [6, 6, 6] },
    hammer: { position: [25.6, 24.5, -32], rotation: [Math.PI, Math.PI + 0.5, -Math.PI + 0.5], scale: [0.02, 0.02, 0.02] },
    shield: { position: [25.5, 23.4, -32], rotation: [Math.PI + 1, -Math.PI / 16, -Math.PI + 0.5], scale: [0.02, 0.02, 0.02] },
    lightTargetPos: [23, 35, 0],
  };

  const [swordSpring, swordApi] = useSpring(() => ({ ...initialState.sword, config: config.gentle }));
  const [hammerSpring, hammerApi] = useSpring(() => ({ ...initialState.hammer, config: config.gentle }));
  const [shieldSpring, shieldApi] = useSpring(() => ({ ...initialState.shield, config: config.gentle }));

  useEffect(() => {
    const stateToUse = isItemSelected ? targetState : initialState;
    swordApi.start(stateToUse.sword);
    hammerApi.start(stateToUse.hammer);
    shieldApi.start(stateToUse.shield);
  }, [isItemSelected]);

  useEffect(() => {
    const targetPos = isItemSelected ? targetState.lightTargetPos : initialState.lightTargetPos;
    spotLightTargetObj.position.set(...targetPos);
  }, [isItemSelected]);

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
    springProps: {
      swordSpring,
      hammerSpring,
      shieldSpring,
    },
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
