import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/image/ScoreCardWithShadow.png";
import { UserContext } from "../../context/UserContext";
import Button from "../Button/Button";

export default function Title2() {
  const { user } = useContext(UserContext);
  const buttonPrimary =
    "uppercase md:relative py-2 px-4 lg:w-[230px] lg:h-12 md:w-[200px] md:h-10 text-[15px] md:text-[18px] lg:text-[24px] font-bold bg-gradient-to-r from-gradient-color2 via-gradient-color3 to-gradient-color1 text-white text-center items-center rounded-[20px] hover:bg-gradient-to-r hover:from-gradient-color3 hover:via-gradient-color3 hover:to-gradient-color3  ease-in";
  const navigate = useNavigate();
  const handleClickSignup = () => {
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
  return (
    <div className="lg:grid lg:grid-cols-2 m-4">
      <div className=" flex flex-col justify-center items-center text-center  ">
        <h1
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-white font-secondary-font md:text-start text-[30px] md:text-[40px] lg:text-[45px] font-extrabold m-7 "
        >
          Participez à la plus belle aventure football jamais connue
        </h1>
        <Button
          type="button"
          content="Je participe"
          handleClick={handleClickSignup}
          className={buttonPrimary}
        />
        <h3
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=" font-primary-font text-[30px] md:text-[50px] lg:text-[60px] text-center font-bold bg-clip-text text-transparent  bg-gradient-to-b from-gradient-color1 via-gradient-color3 to-gradient-color2 mt-10"
        >
          THE LAB
        </h3>
        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className="font-primary-font text-[10px] md:text-[15px] lg:text-[20px] text-center bg-clip-text text-transparent bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2"
        >
          STOP DREAMING, START EXCELLING
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-duration="1000"
        className="flex flex-col justify-center items-center text-center"
      >
        <img
          src={Avatar}
          alt="Score Card"
          className=" w-60 h-70 md:w-[500px] md:h-auto  top-0 left-48 "
        />
      </div>
    </div>
  );
}
