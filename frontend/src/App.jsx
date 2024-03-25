import ScoreCard from "./pages/Home/ScoreCard";
import Title from "./pages/Home/Title";

function App() {
  return (
    <div className="block md:flex md:justify-evenly md:items-center justify-center items-center">
      <Title />
      <ScoreCard />
    </div>
  );
}

export default App;
