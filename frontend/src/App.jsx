import ParticleBackground from "./components/Canvas/Canvas";

function App() {
  return (
    <div className="font-secondary_font min-h-[calc(100vh-160px)] flex flex-wrap justify-center bg-gradient-to-b from-background-color-second to-background-color-first ">
      <h1 className="absolute text-white top-40 text-7xl"> The Lab </h1>
      <ParticleBackground />
    </div>
  );

}

export default App;
