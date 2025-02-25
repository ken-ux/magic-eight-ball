import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { TriangleProps } from "../types";

function Triangle(props: TriangleProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const [opacity, setOpacity] = useState(0);

  useFrame((_state, delta) => {
    if (props.triangleVisible) {
      if (opacity <= 1) {
        setOpacity((prevOpacity) => prevOpacity + delta);
      }
    } else if (opacity >= 0) {
      setOpacity((prevOpacity) => prevOpacity - delta);
    }
  });

  const vertices = [
    new THREE.Vector2(0, 0.75), // Top vertex
    new THREE.Vector2(-0.5, 0), // Left vertex
    new THREE.Vector2(0.5, 0), // Right vertex
  ];

  return (
    <mesh {...props} ref={ref} scale={1} rotation={[0, 0, 0]}>
      <shapeGeometry args={[new THREE.Shape(vertices)]} />
      <meshStandardMaterial
        color={"hotpink"}
        transparent={true}
        opacity={opacity}
      />
    </mesh>
  );
}

export default Triangle;
