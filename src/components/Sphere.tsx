import { ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import color from "../assets/textures/color.jpg";
import displacement from "../assets/textures/displacement.jpg";
import metalness from "../assets/textures/metalness.jpg";
import normal from "../assets/textures/normal.jpg";
import roughness from "../assets/textures/roughness.jpg";

function Sphere(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((_state, delta) => (clicked ? ref.current.rotation.x += delta : ref.current.rotation.x -= delta));

  const [colorMap, displacementMap, metalnessMap, normalMap, roughnessMap] = useLoader(
    THREE.TextureLoader,
    [color, displacement, metalness, normal, roughness]
  );

  return (
    <mesh
      {...props}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <sphereGeometry args={[1, 64, 32]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "orange"}
        // wireframe={true}
        displacementScale={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        metalnessMap={metalnessMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
      />
    </mesh>
  );
}

export default Sphere;
