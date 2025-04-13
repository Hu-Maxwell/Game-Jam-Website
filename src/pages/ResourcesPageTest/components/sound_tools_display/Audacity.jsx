import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Audacity_SVGTextureMesh = ({
  svgUrl,
  iconUrl,
  title,
  facts = ["Fact 1 goes here", "Fact 2 goes here", "Fact 3 goes here"],
  position,
  rotation,
  scale = [1, 1, 1]
}) => {
  const meshRef = useRef();
  const textureRef = useRef();
  
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024; 
    canvas.height = 512;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const renderCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (svgImageLoaded) {
        ctx.drawImage(svgImage, 0, 0, canvas.width, canvas.height);
      }
      
      const iconHeight = canvas.height * 0.5; 
      const iconWidth = iconHeight; 
      const iconX = 50; 
      const iconY = (canvas.height - iconHeight) / 2;
      
      if (iconImageLoaded) {
        ctx.drawImage(iconImage, iconX, iconY, iconWidth, iconHeight);
      }
      
      const titleX = iconX + iconWidth + 20;
      const titleY = canvas.height * 0.15;
      const titleWidth = canvas.width - titleX - 60; 
      const titleHeight = canvas.height * 0.15;
      
      ctx.font = 'bold 32px Arial';
      ctx.fillStyle = '#FFFFFF';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      
      ctx.fillText(title, titleX, titleY + titleHeight/2, titleWidth);
      
      const factBoxHeight = canvas.height * 0.15;
      const factSpacing = canvas.height * 0.05;
      const factStartY = titleY + titleHeight + factSpacing;
      
      facts.forEach((fact, index) => {
        const factY = factStartY + (factBoxHeight + factSpacing) * index;
        
        ctx.font = '24px Arial';
        ctx.fillStyle = '#00FF00';
        ctx.textBaseline = 'middle';
        ctx.fillText(`• ${fact}`, titleX, factY + factBoxHeight/2, titleWidth);
      });
      
      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    };
    
    let svgImage = new Image();
    let svgImageLoaded = false;
    
    svgImage.onload = () => {
      svgImageLoaded = true;
      renderCanvas();
    };
    
    svgImage.onerror = (err) => {
      console.error("Error loading SVG:", err);
    };
    
    if (svgUrl) {
      svgImage.src = svgUrl;
    } else {
      svgImageLoaded = true;
    }
    
    let iconImage = new Image();
    let iconImageLoaded = false;
    
    iconImage.onload = () => {
      iconImageLoaded = true;
      renderCanvas();
    };
    
    iconImage.onerror = (err) => {
      console.error("Error loading icon:", err);
    };
    
    if (iconUrl) {
      iconImage.src = iconUrl;
    } else {
      iconImageLoaded = true;
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    textureRef.current = texture;
    
    if (meshRef.current) {
      meshRef.current.material.map = texture;
      meshRef.current.material.transparent = true; 
      meshRef.current.material.needsUpdate = true;
    }
    
    return () => {
      texture.dispose();
    };
  }, [svgUrl, iconUrl, title, facts, position, rotation, scale]);
  
  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <planeGeometry args={[3.8, 1.3]} />
      <meshBasicMaterial transparent={true} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Audacity_SVGTextureMesh;