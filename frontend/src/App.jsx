import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Timeline from "./pages/Home/Timeline";
import Performances from "./pages/Home/Performances";
import Performances2 from "./pages/Home/Performances2";
import Events from "./pages/Home/Events";
import Title from "./pages/Home/Title";

function App() {
  return (
    <div className=" max-w-[1600px] md:flex md:flex-col justify-center items-center">
      <Title />
      <Timeline />
      <Performances />
      <Performances2 />
      <Events />
    </div>
  );
}

export default App;
