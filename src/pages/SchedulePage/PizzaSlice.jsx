import React, { useState } from "react";

const PizzaSlice = ({ index, totalSlices, radius, rotationAngle }) => {
  const sliceAngle = (2 * Math.PI) / totalSlices; // Wide slice angle due to fewer slices
  const startAngle = index * sliceAngle;
  const midAngle = startAngle + sliceAngle / 2;
  const [isHovered, setIsHovered] = useState(false);

  const popOutDistance = 30;
  
  // Convert polar to cartesian for the arc's two outer points
  const x1 = radius * Math.cos(startAngle); // (Based on the angle and radius of the slice)
  const y1 = radius * Math.sin(startAngle);
  const x2 = radius * Math.cos(startAngle + sliceAngle);
  const y2 = radius * Math.sin(startAngle + sliceAngle);

  // Text Positioning
  const textX = (radius * 0.7) * Math.cos(midAngle);
  const textY = (radius * 0.7) * Math.sin(midAngle); 

  // "Pop-out" effect when it's hovered on
  const extendFactor = isHovered ? popOutDistance / radius : 0;
  const x1Extended = x1 + (x1 * extendFactor);
  const y1Extended = y1 + (y1 * extendFactor);
  const x2Extended = x2 + (x2 * extendFactor);
  const y2Extended = y2 + (y2 * extendFactor);

  // SVG Slice Path
  const slicePath = `
    M 0 0 
    L ${x1Extended} ${y1Extended}
    A ${radius + (isHovered ? popOutDistance : 0)} ${radius + (isHovered ? popOutDistance : 0)} 0 0 1 ${x2Extended} ${y2Extended} 
    Z 
  `;

  // M: Move to (0,0) ((Anchor Point))
  // L: Line to first outer edge point
  // A: Arc from (x1Ext, y1Ext) to (x2Ext, y2Ext). Using elliptical arc formula. rx, ry = x and y radii of arc (Uses popOutDistance to make slice pop out)
  // Z: Closes path

  return (
    <g 
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)} // Handles hover start
      onMouseLeave={() => setIsHovered(false)} // Handles hover end
    >
      {/* Pizza Slice */}
      <path
        d={slicePath}
        fill={["#FFD700", "#FFA500", "#FF8C00", "#FF4500"][index % 4]}
        stroke="black"
        strokeWidth="2"
        style={{
          transition: "d 0.3s ease-in-out, transform 0.3s ease-in-out, filter 0.3s ease-in-out", // Transition for slice shape (d), transform (pop-out), and filter (shadow)
          filter: isHovered ? "drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.8))" : "none", // Apply shadow on hover
        }}
      />

      {/* Label and Additional Text */}
      <g transform={`translate(${textX}, ${textY}) rotate(${-rotationAngle})`}>
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="8"
          fontWeight="bold"
          fill="black"
        >
          Event {index + 1}
        </text>

      {/* Additional Text wrapped in a group for opacity transition */}
      <g
          style={{
            // Fade in/out based on hover state using transition
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.5s ease-in-out", 
            pointerEvents: "none", 
          }}
        >
          <text
            textAnchor="middle"
            fontSize="5"
            fill="white"
            y="10" 
          >
            <tspan x="10" dy="0">More details for Event {index + 1}</tspan>
            <tspan x="10" dy="1.2em">Time of Event</tspan>
            <tspan x="10" dy="1.2em">Location</tspan>
          </text>
        </g>
      </g>
    </g>
  );
};


export default PizzaSlice;