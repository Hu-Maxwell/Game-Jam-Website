import { useRef, useEffect } from 'react'; 

import * as THREE from "three";
import * as CANNON from "cannon-es";
import { gsap } from 'gsap'; 

import { START_POS_ONE, FINAL_POS_ONE, START_POS_TWO, FINAL_POS_TWO } from "./../utils/constants";

const useScrollCamera = (camera, crown, crownTwo, setCrownVisible, setCrownTwoVisible) => {
  const isPhysicsRunning = useRef(false);
  const worldRef = useRef(null);
  const crownBodyRef = useRef(null);
  const groundBodyRef = useRef(null);

  // #region scroll

  // scrollProgress is a percentage of the amount of scrolls done + current scroll phase 
  const scrollProgress = useRef(0); 
  const maxScroll = 20; // 20 ticks of scrolling
  let curScrollPhase = 1;

  const handleScrollPhase = () => {
    curScrollPhase = ~~(scrollProgress.current); 
  }

  const handlePhysics = () => {
    if (!worldRef.current) { crownPhysics(); }
    updatePhysics();
  }

  // sets scroll progress
  // note: when scrolling down, deltaY is positive. up is negative.
  useEffect(() => {
    if(scrollProgress.current >= 1) { return; }

    const handleWheel = (event) => {
      scrollProgress.current = gsap.utils.clamp(0, 2, ((scrollProgress.current * maxScroll) + (event.deltaY / 100)) / maxScroll);
      handleScrollPhase();
      handlePhysics();  
      animateScene();
    }; 
    window.addEventListener('wheel', handleWheel);

    return () => window.removeEventListener('wheel', handleWheel);
  }, []); 
  // #endregion

  const animateScene = () => {
    if (!camera || !crown || !crownTwo) return;

    animateCamera();
    animateCrown(); 
  }

  // #region camera

  const animateCamera = () => {
    cameraLookAtCrown(); 
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

      // TODO: make this so it gets closer and closer to the crown
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
    
  const cameraLookAtCrown = () => {
    const targetPos = new THREE.Vector3();
    crown.current.getWorldPosition(targetPos);

    // idk what this does cuz chatgpt :)
    const m = new THREE.Matrix4();
    m.lookAt(camera.current.position, targetPos, camera.current.up);

    const targetQuaternion = new THREE.Quaternion();
    targetQuaternion.setFromRotationMatrix(m);

    gsap.to(camera.current.quaternion, {
      x: targetQuaternion.x,
      y: targetQuaternion.y,
      z: targetQuaternion.z,
      w: targetQuaternion.w,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        camera.current.quaternion.normalize();
      },
    });
  };
  // #endregion

  // #region crown
  const animateCrown = () => {

    // if (curScrollPhase == 3 && isLookingAtCrownBack()) {
    //   setCrownVisible(false); 
    //   setCrownTwoVisible(true); 
    // }
  }
  
  const updatePhysics = () => {
    if (!isPhysicsRunning.current || !worldRef.current) return; 
    
    worldRef.current.step(1 / 60);
    
    if (crown.current && crownBodyRef.current) {
      crown.current.position.copy(crownBodyRef.current.position);
      crown.current.quaternion.copy(crownBodyRef.current.quaternion);
    }
  };

  const crownPhysics = () => {
    isPhysicsRunning.current = true; 

    const world = new CANNON.World();
    world.gravity.set(0, -9.81, 0);
    worldRef.current = world;

    const crownMaterial = new CANNON.Material();
    const crownBody = new CANNON.Body({
      mass: 1, 
      shape: new CANNON.Cylinder(1, 1, 1.5, 16), 
      position: new CANNON.Vec3(crown.current.position.x, crown.current.position.y, crown.current.position.z),
      material: crownMaterial, 
    });
    // gives crown angular velocity so it doesn't fall straight down 
    crownBody.angularVelocity.set(2, 0, 1);
    crownBody.angularDamping = 0.1;
    world.addBody(crownBody);
    crownBodyRef.current = crownBody;

    const groundMaterial = new CANNON.Material();
    const groundBody = new CANNON.Body({
      mass: 0, 
      shape: new CANNON.Plane(),
      position: new CANNON.Vec3(crown.current.position.x, crown.current.position.y - 10, crown.current.position.z),
      material: groundMaterial,
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);
    groundBodyRef.current = groundBody; 

    // ground properties
    const contactMaterial = new CANNON.ContactMaterial(crownMaterial, groundMaterial, {
      friction: 1, 
      restitution: .5, // bounciness 
    });
    world.addContactMaterial(contactMaterial);


    updatePhysics();
  };


  const isLookingAtCrownBack = () => {
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
      return true; 
    } 

    return false; 
  }

  // #endregion 

}

export default useScrollCamera; 