import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';

const Base = ({ hour }) => {
  const texture = useLoader(THREE.TextureLoader, '/schedule/r.png');
  
  const getSchedule = (hour) => {
    if (hour < 4) return "Team Mixer";
    else if (hour < 10) return "Draft an idea!";
    else if (hour < 20) return "Begin working on your game.";
    else if (hour < 30) return "stuff";
    else if (hour < 40) return "Prepare your pitches!";
    else if (hour < 44) return "Pitch your idea!";
    else return "dd";
  };

  const schedule = getSchedule(hour); 

  return (
    <>
      <mesh position={[0, 13, 5]}>
        <boxGeometry args={[13, 20, 13]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <Text3D
        font="/fonts/munro.json" 
        size={1.5}
        height={0.1}
        position={[4.5, 15, -2.0]}
        rotation={[0, Math.PI, 0]}
      >
        {schedule}
        <meshStandardMaterial color={new THREE.Color(0, 0, 1)} />
      </Text3D>

    </>
  )
}
export default Base; 