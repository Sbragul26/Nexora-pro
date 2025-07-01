import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveCube = ({ position, mousePosition }: { position: [number, number, number], mousePosition: { x: number, y: number } }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Mouse influence
      meshRef.current.rotation.x += mousePosition.y * 0.001;
      meshRef.current.rotation.y += mousePosition.x * 0.001;
      
      // Hover effect
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Float speed={hovered ? 4 : 2} rotationIntensity={hovered ? 2 : 1} floatIntensity={hovered ? 4 : 2}>
      <mesh 
        ref={meshRef} 
        position={position}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={hovered ? "#60a5fa" : "#3b82f6"} 
          transparent 
          opacity={hovered ? 1 : 0.8}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};

const ReactiveParticles = ({ mousePosition }: { mousePosition: { x: number, y: number } }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.x = mousePosition.y * 0.0001;
      particlesRef.current.rotation.z = mousePosition.x * 0.0001;
    }
  });

  const particleCount = 150;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#3b82f6" size={0.15} transparent opacity={0.8} />
    </points>
  );
};

const Scene3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x: x * 100, y: y * 100 });
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full cursor-pointer"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} />
        
        <Stars radius={300} depth={60} count={1500} factor={8} />
        <ReactiveParticles mousePosition={mousePosition} />
        
        <InteractiveCube position={[-3, 2, 0]} mousePosition={mousePosition} />
        <InteractiveCube position={[3, -2, -2]} mousePosition={mousePosition} />
        <InteractiveCube position={[0, 0, -5]} mousePosition={mousePosition} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
};

export default Scene3D;