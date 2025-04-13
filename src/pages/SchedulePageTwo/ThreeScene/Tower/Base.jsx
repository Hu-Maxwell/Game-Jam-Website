import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const Base = ({ hour }) => {
  const texture = useLoader(THREE.TextureLoader, '/schedule/r.png');
  
  // scuffed cuz i don't know how to center across multiple lines
  const getSchedule = (hour) => {
    if (hour >= 44) return "Final presentations\n& judging";
    if (hour >= 40) return "  Subs for \nlunch (again)";
    if (hour >= 37) return "SSB\n120 opens again.";
    if (hour >= 21) return "Subs for\n lunch!";
    if (hour >= 18) return "Begin your pitch!";
    if (hour >= 16) return "Pizza for\n Dinner!";
    if (hour >= 13) return "Cookies for\n    grab!";
    if (hour >= 0.5) return "  Opening slides\n& Theme Reveal!";
    return "MercedJam\nbegins soon!";
  };

  const schedule = getSchedule(hour); 

  return (
    <>
      <mesh position={[0, 13, 5.5]}>
        <boxGeometry args={[13, 20, 13]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <Text
        font="/fonts/munro.ttf"
        fontSize={1.6}
        position={[-.1, 15, -2.0]}
        rotation={[0, Math.PI, 0]}
        anchorX="center"
        anchorY="middle"
        color="magenta"
      >
        {schedule}
      </Text>

    </>
  )
}
export default Base; 