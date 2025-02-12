import { ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import color from "../assets/textures/ex.jpg";
import metalness from "../assets/textures/metalness.jpg";
import normal from "../assets/textures/normal.jpg";
import roughness from "../assets/textures/roughness.jpg";

function Sphere(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((_state, delta) => {
    if (clicked && ref.current.rotation.x <= THREE.MathUtils.degToRad(180)) {
      ref.current.rotation.x += delta * 4;
      ref.current.position.z += delta * 3;
    } else if (!clicked && ref.current.rotation.x >= 0) {
      ref.current.rotation.x -= delta * 4;
      ref.current.position.z -= delta * 3;
    }
  });

  const [colorMap, metalnessMap, normalMap, roughnessMap] = useLoader(
    THREE.TextureLoader,
    [color, metalness, normal, roughness]
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
        displacementScale={0}
        map={colorMap}
        metalnessMap={metalnessMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
      />
    </mesh>
  );
}

export default Sphere;
