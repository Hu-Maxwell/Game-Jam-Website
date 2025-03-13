import React, { useState } from "react";
import slice1 from "/src/assets/schedulePage/slice1.jpg";
import slice2 from "/src/assets/schedulePage/slice2.jpg";
import slice3 from "/src/assets/schedulePage/slice3.jpg";
import slice4 from "/src/assets/schedulePage/slice4.jpg";
import slice5 from "/src/assets/schedulePage/slice5.jpg";
import slice6 from "/src/assets/schedulePage/slice6.jpg";
import slice7 from "/src/assets/schedulePage/slice7.jpg";
import slice8 from "/src/assets/schedulePage/slice8.jpg";

// Array of images for each slice
const images = [slice1, slice2, slice3, slice4, slice5, slice6, slice7, slice8];

const PizzaSlice = ({ index, totalSlices, radius, rotationAngle, isClicked, onClick }) => {
  const sliceAngle = (2 * Math.PI) / totalSlices; // Angle for each slice
  const startAngle = index * sliceAngle; // Starting angle for this slice
  const midAngle = startAngle + sliceAngle / 2; // Middle of the slice

  const popOutDistance = 40; // How far the slice pops out when clicked
  const extendFactor = isClicked ? popOutDistance / radius : 0; // Only extends if clicked

  // Get the coordinates for the slice's arc
  const x1 = radius * Math.cos(startAngle);
  const y1 = radius * Math.sin(startAngle);
  const x2 = radius * Math.cos(startAngle + sliceAngle);
  const y2 = radius * Math.sin(startAngle + sliceAngle);

  // Extend coordinates if slice is clicked (pops out effect)
  const x1Extended = x1 + x1 * extendFactor;
  const y1Extended = y1 + y1 * extendFactor;
  const x2Extended = x2 + x2 * extendFactor;
  const y2Extended = y2 + y2 * extendFactor;

  // Position for the event text inside the slice
  const textX = (radius * 0.5) * Math.cos(midAngle);
  const textY = (radius * 0.5) * Math.sin(midAngle);

  // Position and size for the image inside the slice
  const imageSize = radius * 0.32;
  const imageX = (radius * 0.85) * Math.cos(midAngle) - imageSize / 2;
  const imageY = (radius * 0.85) * Math.sin(midAngle) - imageSize / 2;

  // Path for the slice shape
  const slicePath = `
    M 0 0 
    L ${x1Extended} ${y1Extended}
    A ${radius + (isClicked ? popOutDistance : 0)} ${radius + (isClicked ? popOutDistance : 0)} 0 0 1 ${x2Extended} ${y2Extended} 
    Z 
  `;

  const selectedImage = images[index % images.length]; // Picks an image based on slice index

  return (
    <g style={{ cursor: "pointer", transition: "transform 0.5s ease-in-out" }} onClick={onClick}>
      {/* Fancy visual effects for the slice */}
      <defs>
        {/* Glow effect around text */}
        <filter id={`glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blurred" />
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Pixel pattern for the slice texture */}
        <pattern id={`pixelPattern-${index}`} width="10" height="5" patternUnits="userSpaceOnUse">
          <rect width="5" height="5" fill="#B0BEC5" />
          <rect x="5" y="5" width="5" height="5" fill="#78909C" />
        </pattern>

        {/* Crack effect to make it look more mystical-ly */}
        <filter id={`cracks-${index}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>

        {/* Gradient overlay for a cool mystical vibe */}
        <linearGradient id={`mysticGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(173, 216, 230, 0.5)" />
          <stop offset="100%" stopColor="rgba(128, 0, 128, 0.7)" />
        </linearGradient>
      </defs>

      {/* The actual pizza slice */}
      <g>
        <path
          d={slicePath}
          fill={`url(#pixelPattern-${index})`} // Gives it a cool pixelated texture
          stroke="black"
          strokeWidth="2"
          filter={`url(#cracks-${index})`} // Adds cracks effect
          style={{ 
            mixBlendMode: "multiply",
            transition: "d 0.3s ease-in-out, transform 0.3s ease-in-out"
          }}
        />
        {/* Extra gradient overlay for a bit more style */}
        <path 
          d={slicePath} 
          fill={`url(#mysticGradient-${index})`} 
          opacity="0.4" 
          style={{
            transition: "d 0.3s ease-in-out, transform 0.3s ease-in-out"
          }}
        />
      </g>

      {/* Event text inside the slice */}
      <g transform={`translate(${textX}, ${textY}) rotate(${-rotationAngle})`}>
        <text
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          stroke="black"
          strokeWidth="0.3"
          fill="white"
          filter={`url(#glow-${index})`} // Glow effect for readability
        >
          Event {index + 1}
        </text>
      </g>

      {/* Image that only appears when the slice is clicked */}
      {isClicked && (
        <g
          transform={`translate(${imageX}, ${imageY})`}
          style={{
            opacity: isClicked ? 1 : 0,
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          }}
        >
          {/* White box background for the image */}
          <rect
            width={imageSize}
            height={imageSize}
            fill="white"
            stroke="black"
            strokeWidth="1"
            transform={`rotate(${-rotationAngle}, ${imageSize / 2}, ${imageSize / 2})`}
            filter={`url(#glow-${index})`}
            style={{
              opacity: isClicked ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
          
          {/* The actual image inside the slice */}
          <image
            href={selectedImage}
            width={imageSize}
            height={imageSize}
            transform={`rotate(${-rotationAngle}, ${imageSize / 2}, ${imageSize / 2})`}
            preserveAspectRatio="xMidYMid slice"
            filter={`url(#glow-${index})`}
            style={{
              opacity: isClicked ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />

          {/* Black outline for the image (to make it pop) */}
          <rect
            width={imageSize}
            height={imageSize}
            fill="none"
            stroke="black"
            strokeWidth="1"
            filter={`url(#cracks-${index})`}
            transform={`rotate(${-rotationAngle}, ${imageSize / 2}, ${imageSize / 2})`}
            style={{
              opacity: isClicked ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        </g>
      )}
    </g>
  );
};

export default PizzaSlice;
