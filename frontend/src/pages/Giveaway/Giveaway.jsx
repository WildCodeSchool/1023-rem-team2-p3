import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

import Event1 from "../../components/event/Event1";
import reglement from "../../data/Reglement.json";

export default function Giveaway() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };
  const buttonLogin =
    "bg-gradient-to-l leading-none py-2 px-2 from-[#4CACFF] via-[#A070EF] to-[#8E78DA] text-white font-[400] text-[10px] w-[300px] h-[65px] flex items-center justify-center rounded-[20px] hover:bg-gradient-to-l hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF] text-[40px] ease-in ";
  return (
    <div className=" z-10 flex flex-col gap-10 pb-28 pt-10">
      <div className="flex flex-col justify-center items-center gap-20 flex-wrap ">
        <h1 className="text-7xl font-secondary-font text-center  bg-gradient-to-t from-gradient-color2  via-gradient-color3 to-gradient-color1 text-transparent bg-clip-text font-bold ">
          Participer au jeu concours
        </h1>
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
            <p className="text-gray-300 font-secondary-font text-center scrollbar md:scrollbar-thumb-black md:scrollbar-track-white  scrollbar-track-transparent h-80 overflow-y-scroll ">
              {reglement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
