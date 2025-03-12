import { Canvas } from "@react-three/fiber";
import { ChangeEvent, FormEvent, useState } from "react";
import Sphere from "./components/Sphere";
import Triangle from "./components/Triangle";
// import Tetrahedron from "./components/Tetrahedron";

function App() {
  const [triangleVisible, setTriangleVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState("");

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="h-screen bg-blue-200">
      {/* <p id="prediction-text">Hello</p> */}
      <div className="absolute z-10 mt-10 flex w-full flex-col items-center">
        <p className="text-center text-3xl">Ask the Magic 8 Ball</p>
        <form
          className="flex items-center justify-center gap-2"
          action=""
          onSubmit={formHandler}
        >
          <div>
            <label htmlFor="question"></label>
            <input
              className="rounded-lg border border-blue-50 px-2 py-1 outline"
              type="text"
              name="question"
              id="question"
              placeholder="Will I win the lottery?"
              value={text}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
              }
              required
            />
          </div>
          <button className="test px-2 py-0.5 text-lg" type="submit">
            Submit
          </button>
        </form>

        <button
          type="button"
          className="test"
          onClick={() => {
            setText("");
            setSubmitted(false);
          }}
        >
          Restart
        </button>
      </div>

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
        {/* <Tetrahedron position={[0, 0, 1]} /> */}
      </Canvas>
    </div>
  );
}

export default App;
