import React from "react";
import Title from "./components/All Home/Title";
import Timeline from "./components/All Home/TimeLine";
// import Performances from "./components/All Home/Performances";
// import Performances2 from "./components/All Home/Performances2";
import Events from "./components/All Home/Events";

function App() {
  return (
    <div className="max-w-[1600px] md:flex md:flex-col justify-center items-center">
      <Title />
      <Timeline />
      {/* <Performances />
      <Performances2 /> */}
      <Events />
    </div>
  );
}

export default App;
