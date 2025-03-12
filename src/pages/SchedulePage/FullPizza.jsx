import React, { useState, useEffect } from "react";
import PizzaSlice from "./PizzaSlice";

const FullPizza = () => {
  // Keeps track of whether the pizza is spinning or not
  const [isRotating, setIsRotating] = useState(false); 

  // Stores the current angle of rotation (starts at 0)
  const [rotationAngle, setRotationAngle] = useState(0); 

  // Keeps track of which slice was clicked (null means none is selected)
  const [clickedSlice, setClickedSlice] = useState(null); 

  // Number of slices in the pizza (change this if you want more/less slices)
  const sliceCount = 8;

  // Radius controls how big the pizza is
  const radius = 150; 

  // List of events, each slice will have one
  const events = [
    { name: "Event 1", description: "Description of Event 1" },
    { name: "Event 2", description: "Description of Event 2" },
    { name: "Event 3", description: "Description of Event 3" },
    { name: "Event 4", description: "Description of Event 4" },
    { name: "Event 5", description: "Description of Event 5" },
    { name: "Event 6", description: "Description of Event 6" },
    { name: "Event 7", description: "Description of Event 7" },
    { name: "Event 8", description: "Description of Event 8" },
  ];

  // Handles clicking a slice—if it's already clicked, unselect it
  const handleSliceClick = (index) => {
    setClickedSlice(clickedSlice === index ? null : index);
  };

  // Runs the rotation animation when isRotating is true
  useEffect(() => { 
    let animationFrameId;

    const rotate = () => {
      if (isRotating) {
        setRotationAngle((prev) => (prev + 0.15) % 360); // Keeps adding to angle, resets at 360
        animationFrameId = requestAnimationFrame(rotate); // Keeps looping to make it smooth
      }
    };

    if (isRotating) {
      animationFrameId = requestAnimationFrame(rotate); // Starts the animation
    }

    return () => cancelAnimationFrame(animationFrameId); // Stops animation if isRotating is false
  }, [isRotating]); // Runs this effect when isRotating changes

  // Figures out what event info to show
  const renderEventInfo = () => {
    if (clickedSlice !== null) {
      // Show the event for the clicked slice
      return (
        <div>
          <h2>{events[clickedSlice].name}</h2>
          <p>{events[clickedSlice].description}</p>
        </div>
      );
    } else {
      // If nothing is clicked, just show a default event
      return (
        <div>
          <h2>Current Event</h2>
          <p>{events[0].description}</p>
        </div>
      );
    }
  };

  return (
    <div style={{ display: "flex", position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <svg 
        width="175vw" // Makes the pizza bigger
        height="175vh" // Same as above
        viewBox={`${-radius} ${-radius} ${radius * 2} ${radius * 2}`} // Centers everything nicely
        style={{
          position: "absolute", // Lets us move it freely
          transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`, // Moves it to center & rotates it
          overflow: "visible" // Allows slices to extend outside the SVG bounds
        }}
      >
        {Array.from({ length: sliceCount }, (_, i) => ( // Creates slices dynamically
          <PizzaSlice
            key={i} // Helps React keep track of slices
            index={i} 
            totalSlices={sliceCount}
            radius={radius}
            rotationAngle={rotationAngle} // So text inside stays upright
            isClicked={clickedSlice === i}
            onClick={() => handleSliceClick(i)}
          />
        ))}
      </svg>

      {/* Button to start/stop the rotation */}
      <button 
        onClick={() => setIsRotating(!isRotating)}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          fontSize: "16px",
          background: isRotating ? "#FF4500" : "#4CAF50", // Changes color depending on state
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
