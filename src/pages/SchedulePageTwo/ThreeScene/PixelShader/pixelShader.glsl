uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float pixelSize;
uniform int paletteLength;
uniform vec3 palette[9];
uniform vec3 skyboxColor;

vec3 srgbToLinear(vec3 c) {
  return pow(c, vec3(2.2));
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // take the current pixel and convert it into the bigger pixel's index (which is block)
  vec2 blockIndex = floor((uv * resolution) / pixelSize);
  vec2 centerCoord = (blockIndex * pixelSize + pixelSize * 0.5) / resolution; // takes the center coords of the block
  vec4 sampledColor = texture2D(tDiffuse, centerCoord); // texture2D(pointer to image, coords)
  
  vec3 currentColor = sampledColor.rgb;

  // for skybox only
  const vec3 srgbBackdropPurple = vec3(0.533333, 0.015686, 0.517647);
  vec3 backdropPurple = srgbToLinear(srgbBackdropPurple);
  
  if(distance(currentColor, backdropPurple) < 0.05) {
    outputColor = vec4(skyboxColor, sampledColor.a);
    return;
  }

  float bestDistance = 1e10;
  vec3 bestColor = currentColor;
  int bestIndex = -1;
  
  // calculates the color from palette closest to the current pixel's color 
  for (int i = 0; i < paletteLength; i++) {
    float d = distance(currentColor, palette[i]); 

    if (d < bestDistance) {
      bestDistance = d;
      bestColor = palette[i];
      bestIndex = i;
    }
  }

  if (bestIndex == 0) bestColor = vec3(0.36, 0.28, 0.22);  // tower
  if (bestIndex == 1) bestColor = vec3(0.25, 0.20, 0.16);  // tower but darker
  if (bestIndex == 2) bestColor = vec3(0.45, 0.52, 0.60);  // hand
  if (bestIndex == 3) bestColor = vec3(0.30, 0.33, 0.36);  // clock texture numbers 
  if (bestIndex == 4) bestColor = vec3(0.90, 0.84, 0.76);  // clock texture bg
  if (bestIndex == 8) bestColor = vec3(0, 0, 0);           // clock tower shadows
  // 5 - sun, 6 - moon, 7 - black

  float edgeStrength = 2.5; 
  float centerFalloff = smoothstep(0.0, 0.5, abs(uv.x - 0.5) * edgeStrength);
  float darkness = 1.0 - centerFalloff;

  // apply darkness
  bestColor *= darkness;


  outputColor = vec4(bestColor, sampledColor.a);
}