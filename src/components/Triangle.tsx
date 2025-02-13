import { ThreeElements } from "@react-three/fiber";
// import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function Triangle(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // useFrame((_state, delta) => (ref.current.rotation.x += delta));

  const vertices = [
    new THREE.Vector2(0, 1), // Top vertex
    new THREE.Vector2(-1, -0.5), // Left vertex
    new THREE.Vector2(1, -0.5), // Right vertex
  ];

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      {/* <bufferGeometry setFromPoints={vertices}/> */}
      <shapeGeometry args={[new THREE.Shape(vertices)]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default Triangle;
