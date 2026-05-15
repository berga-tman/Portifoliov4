'use client';

import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { Image, Text } from '@react-three/drei';

extend({ MeshLineGeometry, MeshLineMaterial });

// Path lokal
const GLTF_PATH = '/assets/card.glb';
const TEXTURE_PATH = '/assets/band.png';
const IMAGE_PATH = '/assets/port.png';

useGLTF.preload(GLTF_PATH);
useTexture.preload(TEXTURE_PATH);

const textOptions = [
  "hello world_",
  "Bernardo.dev",
  "/portfolio",
  "BA.dev",
  "projects()"
];

function AnimatedText({ position, fontSize }) {
  const [displayText, setDisplayText] = useState(textOptions[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const chars = "!<>-_\\\\/[]{}—=+*^?#________";
    const nextIndex = (index + 1) % textOptions.length;
    const nextWord = textOptions[nextIndex];
    
    const timeout = setTimeout(() => {
      let iteration = 0;
      const maxLength = Math.max(displayText.length, nextWord.length);
      
      const interval = setInterval(() => {
        setDisplayText(
          nextWord
            .padEnd(maxLength, ' ')
            .split("")
            .map((letter, i) => {
              if (i < iteration) {
                return nextWord[i];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        
        if (iteration >= maxLength) {
          clearInterval(interval);
          setDisplayText(nextWord);
          setIndex(nextIndex);
        }
        
        iteration += 1 / 3;
      }, 30);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [index, displayText]);

  return (
    <Text 
      position={position} 
      fontSize={fontSize} 
      letterSpacing={0.02} 
    >
      <meshBasicMaterial color="#ffffff" toneMapped={false} />
      {displayText}
    </Text>
  );
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
        <ambientLight intensity={Math.PI} />
        <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef();
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(GLTF_PATH);
  const texture = useTexture(TEXTURE_PATH);
  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);
  
  const isMobile = width < 768;
  
  const cardPosition = isMobile ? [4, 5, 0] : [3, 4, 0];
  const initialJointPositions = isMobile ? [
    [0.3, 0, 0], 
    [0.6, 0, 0], 
    [0.9, 0, 0], 
    [1.2, 0, 0]
  ] : [
    [3.5, 0, 0], 
    [4, 0, 0], 
    [4.5, 0, 0], 
    [5, 0, 0]
  ];

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.50, 0]]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (hovered) {
        document.body.style.cursor = dragged ? 'grabbing' : 'grab';
        return () => void (document.body.style.cursor = 'auto');
      }
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={cardPosition}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={initialJointPositions[0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={initialJointPositions[1]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={initialJointPositions[2]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={initialJointPositions[3]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={isMobile ? 1.5 : 2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}>
            {nodes.card && (
              <mesh geometry={nodes.card.geometry}>
                <meshPhysicalMaterial 
                  map={materials.Materiais?.map || null} 
                  {...(materials.Materiais?.map ? { "map-anisotropy": 16 } : {})}
                  clearcoat={1} 
                  clearcoatRoughness={0.15} 
                  roughness={0.3} 
                  metalness={0.5} 
                />
              </mesh>
            )}
            {nodes.clip && (
              <mesh geometry={nodes.clip.geometry} material={materials.metal || null} material-roughness={0.3} />
            )}
            {nodes.clamp && (
              <mesh geometry={nodes.clamp.geometry} material={materials.metal || null} />
            )}
          </group>
        </RigidBody>
      </group>
      <mesh ref={band} position={[0, 0, 0]} renderOrder={1}>
        <meshLineGeometry />
        <meshLineMaterial color="white" depthTest={false} resolution={[width, height]} useMap map={texture} repeat={[-3, 1]} lineWidth={1} />
      </mesh>
      
      {/* Texto Animado do Portfólio */}
      {!isMobile && (
        <AnimatedText position={[0, 0, -2]} fontSize={1.2} />
      )}
      {isMobile && (
        <AnimatedText position={[0, 0, -25]} fontSize={2.5} />
      )}
    </>
  );
}