import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Sphere from "./components/Sphere";
import Triangle from "./components/Triangle";

function App() {
  const [triangleVisible, setTriangleVisible] = useState(false);

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Sphere setTriangleVisible={setTriangleVisible} />
        <Triangle position={[0, -0.2, 3.5]} triangleVisible={triangleVisible} />
      </Canvas>
    </div>
  );
}

export default App;
