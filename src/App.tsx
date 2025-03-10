import { Canvas } from "@react-three/fiber";
import { FormEvent, useState } from "react";
import Sphere from "./components/Sphere";
import Triangle from "./components/Triangle";

function App() {
  const [triangleVisible, setTriangleVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="canvas-container">
      {/* <p id="prediction-text">Hello</p> */}
      <form id="question-form" action="" onSubmit={formHandler}>
        <div>
          <label htmlFor="question"></label>
          <input type="text" name="question" id="question" />
        </div>
        <button className="text-3xl" type="submit">
          Submit
        </button>
      </form>
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
        <Sphere submitted={submitted} setTriangleVisible={setTriangleVisible} />
        <Triangle position={[0, -0.2, 3.5]} triangleVisible={triangleVisible} />
      </Canvas>
    </div>
  );
}

export default App;
