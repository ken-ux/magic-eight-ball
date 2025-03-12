import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Form from "./components/Form";
import Sphere from "./components/Sphere";
// import Tetrahedron from "./components/Tetrahedron";
import Triangle from "./components/Triangle";

function App() {
  const [triangleVisible, setTriangleVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const answers = ["Yes", "No", "Maybe"];

  const randomizeAnswer = () => {
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

  const restartButtonHandler = () => {
    setQuestion("");
    setSubmitted(false);
  };

  return (
    <div className="h-screen bg-radial-[at_50%_70%] from-sky-200 via-blue-400 to-indigo-900 to-100%">
      <p
        className={
          "absolute z-5 flex h-full w-full items-center justify-center text-white transition-all duration-700 ease-in-out " +
          (submitted ? "opacity-100 delay-1200" : "opacity-0")
        }
      >
        {answer}
      </p>

      <div className="absolute z-10 mt-14 flex w-full flex-col items-center gap-6">
        <p className="text-center text-3xl">Ask the Magic 8 Ball</p>
        <Form
          submitted={submitted}
          setSubmitted={setSubmitted}
          question={question}
          setQuestion={setQuestion}
          randomizeAnswer={randomizeAnswer}
        />

        {submitted && (
          <button
            type="button"
            className="rounded-lg bg-slate-800 px-2 py-1 text-lg text-slate-50"
            onClick={restartButtonHandler}
          >
            Restart
          </button>
        )}
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
