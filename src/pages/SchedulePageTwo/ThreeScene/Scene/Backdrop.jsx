import { useMemo } from "react";
import * as THREE from "three";

const Backdrop = ({ time }) => {
  const sunAngle = (2 * Math.PI * (time / 44)) - Math.PI / 2;
  const sunAltitude = Math.sin(sunAngle);
  const moonAngle = sunAngle + Math.PI;
  const moonAltitude = Math.sin(moonAngle);

  const radius = 150;
  const verticalOffset = 50;
  const zPosition = 50;

  const sunPosition = {
    x: Math.cos(sunAngle) * radius,
    y: sunAltitude * radius + verticalOffset,
    z: zPosition + 30,
  };

  const moonPosition = {
    x: Math.cos(moonAngle) * radius,
    y: moonAltitude * radius + verticalOffset,
    z: zPosition + 30,
  };

  const skyColor = useMemo(() => {
    const nightColor = new THREE.Color("#0D1B2A");
    const sunriseColor = new THREE.Color("#FFA07A");
    const dayColor = new THREE.Color("#87CEEB");
    const color = new THREE.Color();

    if (sunAltitude >= 0) {
      color.copy(sunriseColor).lerp(dayColor, sunAltitude);
    } else {
      color.copy(nightColor).lerp(sunriseColor, sunAltitude + 1);
    }
    return `#${color.getHexString()}`;
  }, [sunAltitude]);

  return (
    <>
      {/* bg */}
      <mesh position={[0, 0, zPosition + 150]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[700, 700]} />
        <meshBasicMaterial color={skyColor} side={THREE.DoubleSide} />
      </mesh>

      {/* sun */}
      <mesh position={[sunPosition.x, sunPosition.y, sunPosition.z]}>
        <sphereGeometry args={[25, 32, 32]} />
        <meshBasicMaterial color={"#FFD700"} />
      </mesh>

      {/* moon */}
      <mesh position={[moonPosition.x, moonPosition.y, moonPosition.z]}>
        <sphereGeometry args={[25, 32, 32]} />
        <meshBasicMaterial color={"#E0E0E0"} />
      </mesh>
    </>
  );
};

export default Backdrop;
