import * as THREE from 'three';

const TextureFilter = (material, palette) => {
  const texture = material.map;
  const image = texture.image;

  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  const filtered = ConvertToThreeColors(canvas, palette);

  material.map = filtered;
  material.needsUpdate = true;
};

const ConvertToThreeColors = (image, palette) => {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;

  // drawing context 
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  // the actual image
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // iterate through image, each pixel
  for (let i = 0; i < data.length; i += 4) {
    // closest is an rgb val of the closest color to the current pixel
    let closest = palette[0];

    let minDist = Math.hypot(data[i] - closest[0], data[i+1] - closest[1], data[i+2] - closest[2]);
    for (let j = 1; j < palette.length; j++) {
      let currColor = palette[j]
      const currDist = Math.hypot(data[i] - currColor[0], data[i+1] - currColor[1], data[i+2] - currColor[2]);
        
      if (currDist < minDist) {
        closest = currColor; 
        minDist = currDist;
      }
    }

    data[i] = closest[0];
    data[i+1] = closest[1];
    data[i+2] = closest[2];
  }

  ctx.putImageData(imageData, 0, 0);
  const newTexture = new THREE.CanvasTexture(canvas);
  newTexture.needsUpdate = true;
  return newTexture;
};

export default TextureFilter;