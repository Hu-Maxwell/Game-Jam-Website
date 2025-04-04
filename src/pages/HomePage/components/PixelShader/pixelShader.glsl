uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float pixelSize;
uniform int paletteLength;
uniform vec3 palette[5];

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

  // hammer
  if (bestIndex == 0) {
    bestColor = vec3(0.227, 0.184, 0.184);
  }

  // sword
  if (bestIndex == 1) {
    bestColor = vec3(0.498, 0.831, 1.0);
  }

  // anvil
  if (bestIndex == 2) {
    bestColor = vec3(0.1725, 0.1843, 0.2);
  }

  // 4 = white


  
  outputColor = vec4(bestColor, sampledColor.a);
}