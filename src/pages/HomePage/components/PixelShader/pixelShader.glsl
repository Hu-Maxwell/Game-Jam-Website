uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float pixelSize;
uniform int paletteLength;
uniform vec3 palette[6];

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
    bestColor = vec3(0.243, 0.149, 0.078);
  }

  // sword
  if (bestIndex == 1) {
    bestColor = vec3(0.827, 0.612, 0.416); 
  }

  // anvil
  if (bestIndex == 2) {
    bestColor = vec3(0.243, 0.149, 0.078);
  }

  // 4 = white
  if (bestIndex == 4) {
    bestColor = vec3(1.0, 0.5686, 0.0);
  }

  // text
  if (bestIndex == 5) {
    bestColor = vec3(0.53333333333, 0.34509803921, 0.02745098039);
  }



  
  outputColor = vec4(bestColor, sampledColor.a);
}