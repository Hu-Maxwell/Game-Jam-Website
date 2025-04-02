import { useMemo } from 'react';

import { useThree } from '@react-three/fiber';
import { Effect } from 'postprocessing';
import * as THREE from 'three';

import pixelShader from './pixelShader.glsl?raw';

const pixelSize_ = 5; 
const palette_ = [
  new THREE.Vector3(0.0, 0.0, 0.0),  
  new THREE.Vector3(0.20784313725, 0.15686274509, 0.15294117647), 
  new THREE.Vector3(0.270,0.235,0.200)
];

const PixelationEffect = ({pixelSize = pixelSize_, palette = palette_}) => {
  const { size } = useThree(); // resolution
  const res = new THREE.Vector2(size.width, size.height); 
  const paletteLength = palette.length;

  const uniforms =  new Map([
    ['pixelSize', { value: pixelSize }],
    ['resolution', { value: res }],
    ['paletteLength', { value: paletteLength }],
    ['palette', { value: palette }]
  ])  

  // effect automatically sets the vals in pix shader to uniforms
  const effect = useMemo(() => {
    return new Effect('PixelShader', pixelShader, { uniforms });
  }, [pixelSize, palette, paletteLength, size]);

  return <primitive object={effect} />;
};

export default PixelationEffect;
