import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from "@material-tailwind/react";
import Workshops from "../../data/Workshops.json";
import Button from "../Button/Button";

export default function Performances() {
  const buttonPrimary =
    " font-primary-font md:relative py-2 px-4 lg:w-[230px] lg:h-12 md:w-[200px] md:h-10 text-[15px] md:text-[18px] lg:text-[24px] font-bold bg-gradient-to-r from-gradient-color2 via-gradient-color3 to-gradient-color1 text-white text-center items-center rounded-[20px] hover:bg-gradient-to-r hover:from-gradient-color3 hover:via-gradient-color3 hover:to-gradient-color3  ease-in";
  const navigate = useNavigate();
  const handleClickWorkshops = () => {
    navigate("/workshops");
  };
  return (
    <div className="text-white relative">
      <h1 className="  uppercase font-secondary-font  font-[600] text-center text-[25px] md:text-[50px] mt-10">
        Performances
      </h1>
      <div className="flex justify-center items-center text-center m-4 ">
        <Button
          type="button"
          content="Decouvrir"
          handleClick={handleClickWorkshops}
          className={buttonPrimary}
        />
      </div>
      <div className=" ">
        <Carousel className="rounded-xl">
          {Workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="flex items-center justify-center relative"
            >
              <img
                src={workshop.image}
                alt={workshop.nom}
                className="h-64 md:h-auto w-96 object-cover rounded-[50px]"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
