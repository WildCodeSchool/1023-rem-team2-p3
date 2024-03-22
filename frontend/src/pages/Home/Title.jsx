import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Title() {
  const buttonPrimary =
    "uppercase relative py-2 px-4 lg:w-[230px] lg:h-12 md:w-[200px] md:h-10 text-[15px] md:text-[18px] lg:text-[24px] font-bold md:px-4 bg-gradient-to-r from-gradient-color2 via-gradient-color3 to-gradient-color1 text-white text-center items-center rounded-[20px] hover:bg-gradient-to-r hover:from-gradient-color3 hover:via-gradient-color3 hover:to-gradient-color3  ease-in mb-8";
  const navigate = useNavigate();
  const handleClickSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="block text-center p-16 md:flex md:flex-col md:w-1/2">
      <h1 className="text-white font-secondary-font md:text-start text-[24px] md:text-[30px] lg:text-[45px] font-extrabold mb-7 ">
        Participez à la plus belle aventure football jamais connue
      </h1>
      <Button
        type="button"
        content="Je participe"
        handleClick={handleClickSignup}
        className={buttonPrimary}
      />
      <h3 className=" font-primary-font text-[30px] md:text-[50px] lg:text-[60px] text-center font-bold bg-clip-text text-transparent  bg-gradient-to-b from-gradient-color1 via-gradient-color3 to-gradient-color2">
        THE LAB
      </h3>
      <p className="font-primary-font text-[10px] md:text-[15px] lg:text-[20px] text-center bg-clip-text text-transparent bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2">
        STOP DREAMING, START EXCELLING
      </p>
    </div>
  );
}
