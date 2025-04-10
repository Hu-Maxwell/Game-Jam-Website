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
  srgbColor(66, 0, 0),          // red - hammer
  srgbColor(0,125,0),           // green - sword
  srgbColor(0, 0, 188),         // blue - anvil
  srgbColor(0, 0, 0),           // black
  srgbColor(230, 226, 106),     // yellow - text
  srgbColor(113,113,113)        // white - text
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
