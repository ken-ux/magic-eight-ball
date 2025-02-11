import { Canvas } from "@react-three/fiber";
// import Circle from "./components/Circle";
import Sphere from "./components/Sphere";

function App() {


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
        <Sphere />
        {/* <Circle /> */}
      </Canvas>
    </div>
  );
}

export default App;
