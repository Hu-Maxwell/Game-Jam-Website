import { useMemo } from 'react';

import { useThree } from '@react-three/fiber';
import { Effect } from 'postprocessing';
import * as THREE from 'three';

import pixelShader from './pixelShader.glsl?raw';

const srgbColor = (r, g, b) => {
  const c = new THREE.Color(r / 255, g / 255, b / 255);
  c.convertSRGBToLinear();
  return new THREE.Vector3(c.r, c.g, c.b);
};

const pixelSize_ = 4; 
const palette_ = [
  srgbColor(255, 151, 106), // 0. red - sword
  srgbColor(204, 67, 45),   // 1. darker red - sword shadow
  srgbColor(102, 19, 251),  // 2. blue - hammer
  srgbColor(48, 0, 241),    // 3. darker blue - hammer shadow
  srgbColor(203, 149, 106), // 4. brown - shield's wood
  srgbColor(220, 222, 224), // 5. silver - shield's metal
  srgbColor(170, 174, 180), // 6. darker silver - shield's metal shadow
  srgbColor(34, 34, 34)     // 7. bg
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
