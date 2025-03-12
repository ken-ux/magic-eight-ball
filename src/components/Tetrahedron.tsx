import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function Tetrahedron(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [rotateForward, setRotateForward] = useState(true);

  useFrame((_state, delta) => {
    if (rotateForward) {
      ref.current.rotation.y += delta;
      if (ref.current.rotation.y >= THREE.MathUtils.degToRad(90)) {
        setRotateForward(false);
      }
    } else {
      ref.current.rotation.y -= delta;
      if (ref.current.rotation.y <= 0) {
        setRotateForward(true);
      }
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}

export default Tetrahedron;
