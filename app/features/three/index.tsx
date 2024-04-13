import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { wrapper } from './style.css';

export const ThreeTesting = () => {
  return (
    <div className={wrapper}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='orange' position={[0, 0, 5]} />
        <Box position={[4, 0, 0]} />
        <Box position={[-4, 1, 0]} />
      </Canvas>
    </div>
  );
};

const Box: React.FC<{ position: [x: number, y: number, z: number] }> = ({ position }) => {
  const mesh = useRef<Mesh>(null!);
  // const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh ref={mesh} scale={1} position={position}>
      {/* 縦・横・奥行き */}
      <boxGeometry args={[3, 3, 3]} />
      <ambientLight intensity={0.1} />
      <spotLight position={[10, 10, 10]} penumbra={2} />
      <meshStandardMaterial />
    </mesh>
  );
};
