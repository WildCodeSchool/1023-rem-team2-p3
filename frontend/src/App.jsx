import React from "react";
import Title from "./components/All Home/Title";
import Timeline from "./components/All Home/TimeLine";
// import Performances from "./components/All Home/Performances";
import Performances2 from "./components/All Home/Performances2";
import Events from "./components/All Home/Events";
import CarteInfo from "./components/carteInfo/CarteInfo";
import Event1 from "./components/event/Event1";
import ButtonEvent from "./components/All Home/ButtonEvent";

function App() {
  return (
    <div className="max-w-[1600px] md:flex md:flex-col justify-center items-center">
      <Title />
      <Timeline />
      {/* <Performances /> */}
      <Performances2 />
      <Events />
      <CarteInfo />
      <Event1 />
      <ButtonEvent />
    </div>
  );
}

export default App;
