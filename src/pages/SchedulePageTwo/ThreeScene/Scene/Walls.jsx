const Walls = () => {
  const wallThickness = 0.2;
  const roomWidth = 80;
  const roomDepth = 100;
  const roomHeight = 100;

  return (
    <>
      {/* left */}
      <mesh position={[-roomWidth / 2, roomHeight / 2, 0]}>
        <boxGeometry args={[wallThickness, roomHeight, roomDepth]} />
        <meshBasicMaterial color="black" />
      </mesh>

      {/* right */}
      <mesh position={[roomWidth / 2, roomHeight / 2, 0]}>
        <boxGeometry args={[wallThickness, roomHeight, roomDepth]} />
        <meshBasicMaterial color="black" />
      </mesh>
    </>
  );
};

export default Walls;
