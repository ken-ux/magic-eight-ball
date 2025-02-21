import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function Triangle(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const opacityRef = useRef(1);
  const [clicked, click] = useState(false);

  useFrame((_state, delta) => {
    if (clicked) {
      ref.current.rotation.z += delta;
      opacityRef.current = 1;
    } else {
      opacityRef.current = 0.5;
    }
  });

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
      <meshStandardMaterial color={clicked ? "hotpink" : "orange"} transparent={true} opacity={opacityRef.current} />
    </mesh>
  );
}

export default Triangle;
