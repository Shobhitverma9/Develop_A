"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useScroll } from "framer-motion";

function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // We'll read scroll position to morph the chaos into a network
  const { scrollYProgress } = useScroll();

  // Create 500 particles for chaos
  const particleCount = 500;
  const { positions, randomFactors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const randomFactors = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
      randomFactors[i] = Math.random();
    }
    return { positions, randomFactors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Slow drift animation for chaos
    const time = state.clock.getElapsedTime();
    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Simple vertical drift and sine wave displacement
    for (let i = 0; i < particleCount; i++) {
      const factor = randomFactors[i];
      // Drift upwards slowly
      let y = positionsArray[i * 3 + 1];
      y += 0.01 * factor;
      if (y > 10) y = -10;
      
      positionsArray[i * 3 + 1] = y;
      // Slight x drift
      positionsArray[i * 3] += Math.sin(time * 0.5 + factor * 10) * 0.005;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Morph logic based on scroll can be added here
    // e.g., morphing from chaotic positions to a structured sphere or grid
    const progress = scrollYProgress.get();
    
    // Rotate the whole network slightly
    pointsRef.current.rotation.y = time * 0.05 + progress * 2;
    pointsRef.current.rotation.x = progress * 1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#0F62FE"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function SceneManager() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
        {/* Soft fog to blend particles into the distance */}
        <fog attach="fog" args={["#FCFCFB", 5, 15]} />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
