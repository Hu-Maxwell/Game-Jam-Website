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
  srgbColor(255, 71, 49),       // 0. red - tower
  srgbColor(119, 0, 4),         // 1. dark red - tower 
  srgbColor(0, 0, 228),         // 2. blue - hand
  srgbColor(148, 228, 90),      // 3. green - clock texture numbers
  srgbColor(226, 226, 226),     // 4. white - clock texture bg 
  srgbColor(230, 213, 80),      // 5. yellow - sun
  srgbColor(216, 216, 216),     // 6. grey - moon
  srgbColor(0, 0, 0),           // 7. black
  srgbColor(99, 0, 0),          // 8. dark dark red - shadows on clock tower
  srgbColor(247, 40, 228)       // 9. magenta - text 
];

const PixelationEffect = ({pixelSize = pixelSize_, palette = palette_, time}) => {
  const { size } = useThree(); // resolution
  const res = new THREE.Vector2(size.width, size.height); 
  const paletteLength = palette.length;

  const skyboxColor = useMemo(() => {
    const sunAngle = (2 * Math.PI * (time / 44)) - Math.PI / 2;
    const sunAltitude = Math.sin(sunAngle);

    const nightColor = new THREE.Color("#1A1A1A").convertSRGBToLinear();
    const dawnColor  = new THREE.Color("#444444").convertSRGBToLinear();
    const dayColor   = new THREE.Color("#AAAAAA").convertSRGBToLinear();
    const afternoonColor = new THREE.Color("#888888").convertSRGBToLinear();

    const color = new THREE.Color();

    if (sunAltitude >= 0) {
      const t = sunAltitude;
      color.copy(dawnColor).lerp(afternoonColor, t);
    } else {
      const t = sunAltitude + 1;
      color.copy(nightColor).lerp(dawnColor, t);
    }

    return new THREE.Vector3(color.r, color.g, color.b);
  }, [time]);

  const uniforms =  new Map([
    ['pixelSize', { value: pixelSize }],
    ['resolution', { value: res }],
    ['paletteLength', { value: paletteLength }],
    ['palette', { value: palette }],
    ['skyboxColor', { value: skyboxColor }]
  ])  

  // effect automatically sets the vals in pix shader to uniforms
  const effect = useMemo(() => {
    return new Effect('PixelShader', pixelShader, { uniforms });
  }, [pixelSize, palette, paletteLength, size, skyboxColor]);

  return <primitive object={effect} />;
};

export default PixelationEffect;
