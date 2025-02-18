import { ThreeElements } from "@react-three/fiber";
// import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function Triangle(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [clicked, click] = useState(false);
  // useFrame((_state, delta) => (ref.current.rotation.x += delta));

  const vertices = [
    new THREE.Vector2(0, 0.75), // Top vertex
    new THREE.Vector2(-0.5, 0), // Left vertex
    new THREE.Vector2(0.5, 0), // Right vertex
  ];

  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      rotation={[0, 0, 0]}
      onClick={() => click(!clicked)}
    >
      {/* <bufferGeometry setFromPoints={vertices}/> */}
      <shapeGeometry args={[new THREE.Shape(vertices)]} />
      <meshStandardMaterial color={clicked ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default Triangle;
