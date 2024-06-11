import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

import Event1 from "../../components/event/Event1";
import { UserContext } from "../../context/UserContext";
import reglement from "../../data/Reglement.json";
import TopMain from "../../components/TopMain/TopMain";

export default function Giveaway() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleClick = () => {
    if (user.isLogged) {
      if (user.data.is_admin === "user") {
        navigate("/copilot/participate");
      } else {
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  };
  const buttonLogin =
    "bg-gradient-to-l leading-none py-2 px-2 from-[#4CACFF] via-[#A070EF] to-[#8E78DA] text-white font-[400] text-[10px] w-[300px] h-[65px] flex items-center justify-center rounded-[20px] hover:bg-gradient-to-l hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF] text-[40px] ease-in ";
  return (
    <div className=" z-10 flex flex-col gap-10 pb-28 pt-10">
      <TopMain
        title="Participer au jeu concours"
        description="Découvrez les régles !"
      />
      <div className="flex justify-center items-center ">
        <Button
          type="button"
          content="Participer"
          handleClick={handleClick}
          className={buttonLogin}
        />
      </div>
      <div className="flex flex-col ml-10 mr-10 gap-5 pt-5">
        <Event1 />
        <div className="flex flex-col justify-center md:items-center gap-5">
          <h2 className=" text-white font-secondary-font font-bold text-center text-2xl">
            REGLEMENT
          </h2>
          <div className="bg-gray-800 p-5 border-white border-2">
            <p className="text-gray-300 font-secondary-font text-left scrollbar md:scrollbar-thumb-black md:scrollbar-track-white  scrollbar-track-transparent h-80 overflow-y-scroll ">
              {reglement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
