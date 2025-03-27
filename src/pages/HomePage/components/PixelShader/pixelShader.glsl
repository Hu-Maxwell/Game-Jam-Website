uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float pixelSize;
uniform int paletteLength;
uniform vec3 palette[3];

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // take the current pixel and convert it into the bigger pixel's index (which is block)
  vec2 blockIndex = floor((uv * resolution) / pixelSize);
  vec2 centerCoord = (blockIndex * pixelSize + pixelSize * 0.5) / resolution; // takes the center coords of the block
  vec4 sampledColor = texture2D(tDiffuse, centerCoord); // texture2D(pointer to image, coords)
  
  vec3 currentColor = sampledColor.rgb; 
  float bestDistance = 1e10;
  vec3 bestColor = currentColor;
  
  // calculates the color from palette closest to the current pixel's color 
  for (int i = 0; i < paletteLength; i++) {
    float d = distance(currentColor, palette[i]); 
    if (d < bestDistance) {
      bestDistance = d;
      bestColor = palette[i];
    }
  }
  
  outputColor = vec4(bestColor, sampledColor.a);
}