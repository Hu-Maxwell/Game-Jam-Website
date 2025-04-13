import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Godot_SVGTextureMesh = ({
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
    // Create a canvas element to draw the SVG
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024; // Set appropriate size
    canvas.height = 512;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Function to render everything once images are loaded
    const renderCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the SVG as the background/border if available
      if (svgImageLoaded) {
        ctx.drawImage(svgImage, 0, 0, canvas.width, canvas.height);
      }
      
      // Define icon dimensions and positions
      const iconHeight = canvas.height * 0.7; 
      const iconWidth = iconHeight; 
      const iconX = 30; // Position icon all the way to the left
      const iconY = (canvas.height - iconHeight) / 2;
      
      // Draw the icon if loaded
      if (iconImageLoaded) {
        ctx.drawImage(iconImage, iconX, iconY, iconWidth, iconHeight);
      }
      
      // Position text to start right after the icon ends
      const titleX = iconX + iconWidth + 20; // Start text right after the icon
      const titleY = canvas.height * 0.15;
      const titleWidth = canvas.width - titleX - 60; // Leave some margin
      const titleHeight = canvas.height * 0.15;
      
      // Draw title text
      ctx.font = 'bold 32px Arial';
      ctx.fillStyle = '#FFFFFF';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      
      // Draw title text
      ctx.fillText(title, titleX, titleY + titleHeight/2, titleWidth);
      
      // Add fact boxes
      const factBoxHeight = canvas.height * 0.15;
      const factSpacing = canvas.height * 0.05;
      const factStartY = titleY + titleHeight + factSpacing;
      
      // Draw each fact box
      facts.forEach((fact, index) => {
        const factY = factStartY + (factBoxHeight + factSpacing) * index;
        
        ctx.font = '24px Arial';
        ctx.fillStyle = '#00FF00';
        ctx.textBaseline = 'middle';
        ctx.fillText(`• ${fact}`, titleX, factY + factBoxHeight/2, titleWidth);
      });
      
      // Update texture if it exists
      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    };
    
    // Load the SVG image (which contains the border)
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
    
    // Load the icon image
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
    
    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    textureRef.current = texture;
    
    // Apply texture to mesh material
    if (meshRef.current) {
      meshRef.current.material.map = texture;
      meshRef.current.material.transparent = true; // Ensure transparency
      meshRef.current.material.needsUpdate = true;
    }
    
    return () => {
      // Clean up
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

export default Godot_SVGTextureMesh;