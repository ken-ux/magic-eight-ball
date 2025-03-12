import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import color from "../assets/textures/cue.png";
import metalness from "../assets/textures/metalness.jpg";
import normal from "../assets/textures/normal.jpg";
import roughness from "../assets/textures/roughness.jpg";
import { SphereProps } from "../types";

function Sphere(props: SphereProps) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    if (props.submitted) {
      if (ref.current.rotation.x <= THREE.MathUtils.degToRad(180)) {
        ref.current.rotation.x += delta * 4;
        ref.current.position.z += delta * 3;
      }

      // Check if ball has finished rolling forward
      if (ref.current.rotation.x >= THREE.MathUtils.degToRad(180)) {
        props.setTriangleVisible(true);
      }
    } else {
      props.setTriangleVisible(false);
      if (ref.current.rotation.x >= 0) {
        ref.current.rotation.x -= delta * 4;
        ref.current.position.z -= delta * 3;
      }
    }
  });

  const [colorMap, metalnessMap, normalMap, roughnessMap] = useLoader(
    THREE.TextureLoader,
    [color, metalness, normal, roughness],
  );

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1, 64, 32]} />
      <meshStandardMaterial
        color="lightgrey"
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
