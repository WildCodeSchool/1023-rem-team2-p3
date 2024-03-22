import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import Aos from "aos";
import Button from "../../components/Button/Button";
import ScoreCard from "./ScoreCard";

export default function Title() {
  const buttonPrimary =
    "uppercase md:relative py-2 px-4 lg:w-[230px] lg:h-12 md:w-[200px] md:h-10 text-[15px] md:text-[18px] lg:text-[24px] font-bold bg-gradient-to-r from-gradient-color2 via-gradient-color3 to-gradient-color1 text-white text-center items-center rounded-[20px] hover:bg-gradient-to-r hover:from-gradient-color3 hover:via-gradient-color3 hover:to-gradient-color3  ease-in";
  const navigate = useNavigate();
  const handleClickSignup = () => {
    navigate("/signup");
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-2 lg:justify-stretch lg:relative lg:m-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className=" block text-center md:text-start md:flex md:flex-col p-16 items-center"
      >
        <h1 className="text-white font-secondary-font md:text-start text-[30px] md:text-[40px] lg:text-[45px] font-extrabold mb-7 ">
          Participez à la plus belle aventure football jamais connue
        </h1>
        <Button
          type="button"
          content="Je participe"
          handleClick={handleClickSignup}
          className={buttonPrimary}
        />
        <h3 className=" font-primary-font text-[30px] md:text-[50px] lg:text-[60px] text-center font-bold bg-clip-text text-transparent  bg-gradient-to-b from-gradient-color1 via-gradient-color3 to-gradient-color2 mt-10">
          THE LAB
        </h3>
        <p className="font-primary-font text-[10px] md:text-[15px] lg:text-[20px] text-center bg-clip-text text-transparent bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2">
          STOP DREAMING, START EXCELLING
        </p>
      </div>

      <ScoreCard />
    </div>
  );
}
