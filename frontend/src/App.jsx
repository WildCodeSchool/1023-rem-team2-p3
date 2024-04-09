// import React, { useContext, useEffect } from "react";
import Title from "./components/All Home/Title";
import Timeline from "./components/All Home/TimeLine";
// import Performances from "./components/All Home/Performances";
import Performances2 from "./components/All Home/Performances2";
import Events from "./components/All Home/Events";
import CarteInfo from "./components/carteInfo/CarteInfo";
import Event1 from "./components/event/Event1";
import ButtonEvent from "./components/All Home/ButtonEvent";
// import { UserContext } from "./context/UserContext";

function App() {
  // const { user, setUser } = useContext(UserContext);
  // console.info("user", user);
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.info(res);
  //       setUser(res);
  //     })
  //     .catch((err) => console.info(err));
  // }, [setUser]);
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
