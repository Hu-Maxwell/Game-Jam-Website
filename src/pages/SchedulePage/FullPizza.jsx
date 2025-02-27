import React, { useState, useEffect } from "react";
import PizzaSlice from "./PizzaSlice";

const FullPizza = () => {
  const [isRotating, setIsRotating] = useState(false); // Updates isRotating to false when initial load
  const [rotationAngle, setRotationAngle] = useState(0); // Updates rotational angle (0 on default)
  const [activeSlice, setActiveSlice] = useState(null); // Deactivates any hovered slices

  const sliceCount = 8;
  const radius = 150; // Adjust radius for pizza size




  // Handles the rotation
  useEffect(() => { // Runs whenever isRotating changes
    let animationFrameId;
    const rotate = () => { // Function for rotating the pizza
      if (isRotating) {
        setRotationAngle((prev) => (prev + 0.3) % 360); // Updates rotation angle by adding 0.3 to previous angle. "% 360" makes sure angle stays in between 0 - 359 degrees
        animationFrameId = requestAnimationFrame(rotate); // Runs rotate() again on the next frame for smooth animation
      }
    };

    if (isRotating) { // Same code as above but it starts the animation
      animationFrameId = requestAnimationFrame(rotate);
    }

    return () => cancelAnimationFrame(animationFrameId); // Stops the animation when isRotating is toggled

  }, [isRotating]); // Effect only runs when isRotating changes 




  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <svg 
        width="175vw" // Makes SVG larger
        height="175vh" // Makes SVG larger
        viewBox={`${-radius} ${-radius} ${radius * 2} ${radius * 2}`} // Centers at (0,0) and covers the entire pizza wheel with (radius * 2) 
        style={{
          position: "absolute", // Keeps inside DIV but allows free positioning
          left: "0",
          //top: "50%",
          transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`, // Moves center of pizza to center of screen and rotates pizza based on rotationAngle
          overflow: "visible" //allows slices to extend beyond SVG bounds
        }}
      >
        {Array.from({ length: sliceCount }, (_, i) => ( // Generates array of length sliceCount
          <PizzaSlice
            key={i} // Identifier for React
            index={i} 
            totalSlices={sliceCount}
            radius={radius}
            activeSlice={activeSlice}
            setActiveSlice={setActiveSlice} // Updates active slice
            rotationAngle={rotationAngle} // Passes rotation angle to rotate text inside the slices so it stays upright
          />
        ))}
      </svg>

      <button 
        onClick={() => setIsRotating(!isRotating)}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          fontSize: "16px",
          background: isRotating ? "#FF4500" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        {isRotating ? "Stop Rotation" : "Start Rotation"}
      </button>
    </div>
  );
};

export default FullPizza;