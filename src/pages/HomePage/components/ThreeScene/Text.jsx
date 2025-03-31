import React, { useRef } from 'react';
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import helvetikerFont from 'three/examples/fonts/helvetiker_regular.typeface.json';

extend({ TextGeometry });

export default function MText(props) {
    const textRef = useRef();
    const font = new FontLoader().parse(helvetikerFont);

    return (
        <mesh ref={textRef} {...props}>
            <textGeometry
                args={[
                    'MERCED ',
                    {
                        font,
                        size: 1, // Decrease the size (default is often too large)
                        height: 0.2, // Reduce depth to prevent excessive stretching
                        curveSegments: 12, // Controls smoothness of curves
                        bevelEnabled: false, // Disable beveling for a cleaner look
                    },
                ]}
            />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    );
}
