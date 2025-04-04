import React from 'react';

const Walls = () => {
  const wallThickness = 0.2;
  const roomWidth = 30;
  const roomDepth = 30;
  const roomHeight = 20;

  return (
    <>
      <mesh position={[0, roomHeight, 0]}>
        <boxGeometry args={[roomWidth, wallThickness, roomDepth]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, roomHeight / 2, -roomDepth / 2 + wallThickness / 2]}>
        <boxGeometry args={[roomWidth, roomHeight, wallThickness]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Front Wall */}
      <mesh position={[0, roomHeight / 2, roomDepth / 2]}>
        <boxGeometry args={[roomWidth, roomHeight, wallThickness]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-roomWidth / 2, roomHeight / 2, 0]}>
        <boxGeometry args={[wallThickness, roomHeight, roomDepth]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Right Wall */}
      <mesh position={[roomWidth / 2, roomHeight / 2, 0]}>
        <boxGeometry args={[wallThickness, roomHeight, roomDepth]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};

export default Walls;
