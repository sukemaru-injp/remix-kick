import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const ThreeTesting = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='orange' position={[0, 0, 5]} />
        <Box position={[2, 0, 0]} />
        <Box position={[-2, 1, 0]} />
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
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
};
