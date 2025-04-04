import { useMemo } from 'react';

import { useThree } from '@react-three/fiber';
import { Effect } from 'postprocessing';
import * as THREE from 'three';

import pixelShader from './pixelShader.glsl?raw';

const pixelSize_ = 5; 
const palette_ = [
  // red - hammer
  (() => {
    const c = new THREE.Color(66 / 255, 0, 0);
    c.convertSRGBToLinear();
    return new THREE.Vector3(c.r, c.g, c.b);
  })(),

  // green - sword
  (() => {
    const c = new THREE.Color(57 / 255, 193 / 255, 31 / 255);
    c.convertSRGBToLinear();
    return new THREE.Vector3(c.r, c.g, c.b);
  })(),

  // blue - anvil
  (() => {
    const c = new THREE.Color(0, 0, 188 / 255);
    c.convertSRGBToLinear();
    return new THREE.Vector3(c.r, c.g, c.b);
  })(),

  // black
  (() => {
    const c = new THREE.Color(0, 0, 0);
    c.convertSRGBToLinear();
    return new THREE.Vector3(c.r, c.g, c.b);
  })(), 

  // white
  (() => {
    const c = new THREE.Color(1, 1, 1);
    c.convertSRGBToLinear();
    return new THREE.Vector3(c.r, c.g, c.b);
  })()


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
