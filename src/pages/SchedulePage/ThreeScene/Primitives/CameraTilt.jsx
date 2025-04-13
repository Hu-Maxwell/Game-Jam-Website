import { useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const CameraTilt = () => {
  const { camera } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    const maxRotation = 0.05; 

    const targetRotY = mouse.x * maxRotation;
    const targetRotX = mouse.y * maxRotation;

    camera.rotation.y = Math.PI + targetRotY;
    camera.rotation.x = -.5 + targetRotX;
  });

  return null;
};

export default CameraTilt;