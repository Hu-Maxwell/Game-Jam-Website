import { useRef, forwardRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Clock = ({ time }) => {
  const clockTexture = useLoader(THREE.TextureLoader, '/schedule/clock.png');

  const hourHandRef = useRef();
  const minuteHandRef = useRef();

  const initialMinuteOffset = useRef(0);

  // fetches current minute
  useEffect(() => {
    const currentMinute = new Date().getMinutes(); 
    const initialMinuteAngleDeg = currentMinute * 6;
    initialMinuteOffset.current = THREE.MathUtils.degToRad(initialMinuteAngleDeg);

    if (minuteHandRef.current) {
      minuteHandRef.current.rotation.z = -initialMinuteOffset.current;
    }
  }, []);

  // hour update
  useEffect(() => {
    const hourAngleDeg = ((20 + time) % 12) * 30;
    const hourAngleRad = THREE.MathUtils.degToRad(hourAngleDeg);
    if (hourHandRef.current) {
      hourHandRef.current.rotation.z = -hourAngleRad;
    }
  }, [time]);

  return (
    <group position={[0, 24.5, -2.51]} rotation={[0, Math.PI, 0]}>
      {/* clock */}
      <mesh>
        <circleGeometry args={[6  , 32]} />
        <meshStandardMaterial map={clockTexture} side={THREE.DoubleSide} />
      </mesh>

      {/* hour hand */}
      <group ref={hourHandRef}>
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[0.4, 4, 0.1]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </group>

      {/* minute hand */}
      <group ref={minuteHandRef}>
        <mesh position={[0, 2.5, 0]}>
          <boxGeometry args={[0.4, 5, 0.05]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </group>
    </group>
  );
};

export default Clock;
