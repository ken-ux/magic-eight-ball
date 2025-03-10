import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function Tetrahedron(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);

  useFrame((_state, delta) => (meshRef.current.rotation.y += delta));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
    >
      <tetrahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}

export default Tetrahedron;
