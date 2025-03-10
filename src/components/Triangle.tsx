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
      // if (opacity >= 1) {
      //   ref.current.rotation.z += delta;
      // }
    } else if (opacity >= 0) {
      setOpacity((prevOpacity) => prevOpacity - delta);
    }
  });

  const vertices = [
    new THREE.Vector2(0, 1.5), // Top vertex
    new THREE.Vector2(-1, 0), // Left vertex
    new THREE.Vector2(1, 0), // Right vertex
  ];

  return (
    <mesh {...props} scale={0.4} ref={ref}>
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
