uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float pixelSize;
uniform int paletteLength;
uniform vec3 palette[7];

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // take the current pixel and convert it into the bigger pixel's index (which is block)
  vec2 blockIndex = floor((uv * resolution) / pixelSize);
  vec2 centerCoord = (blockIndex * pixelSize + pixelSize * 0.5) / resolution; // takes the center coords of the block
  vec4 sampledColor = texture2D(tDiffuse, centerCoord); // texture2D(pointer to image, coords)
  
  vec3 currentColor = sampledColor.rgb; 
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

  if (bestIndex == 0) {
    bestColor = vec3(0.43, 0.29, 0.15); // sword 
  }
  if (bestIndex == 1) {
    bestColor = vec3(0.24, 0.17, 0.09); // sword shadow
  }
  if (bestIndex == 2) {
    bestColor = vec3(0.29, 0.21, 0.13); // hammer 
  }
  if (bestIndex == 3) {
    bestColor = vec3(0.18, 0.12, 0.07); // hammer shadow
  }
  if (bestIndex == 4) {
    bestColor = vec3(0.35, 0.24, 0.17); // shield wood
  }
  if (bestIndex == 5 || bestIndex == 6) {
    bestColor = vec3(0.13, 0.13, 0.13); // shield metal
  }
  // 6 - ignore

  outputColor = vec4(bestColor, sampledColor.a);
}