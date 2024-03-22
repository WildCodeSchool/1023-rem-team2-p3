import React, { useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Aos from "aos";
import Title from "./pages/Home/Title";
import Timeline from "./pages/Home/Timeline";
import Performances from "./pages/Home/Performances";
import Events from "./pages/Home/Events";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className=" max-w-[1600px] md:flex md:flex-col justify-center items-center">
      <Title />
      <Timeline />
      <Performances />
      <Events />
    </div>
  );
}

export default App;
