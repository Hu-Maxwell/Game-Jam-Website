import * as THREE from 'three';

export const SPEED = 0.3;

export const START_POS_ONE = new THREE.Vector3(0, 5, 35);
export const FINAL_POS_ONE = new THREE.Vector3(0, 5, 10);

export const START_POS_TWO = FINAL_POS_ONE; 
export const FINAL_POS_TWO = new THREE.Vector3(-10, 5, 10); // moves left a bit after