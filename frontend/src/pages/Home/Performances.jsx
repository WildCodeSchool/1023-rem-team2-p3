import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from "@material-tailwind/react";
import Workshops from "../../data/Workshops.json";

export default function Performances() {
  return (
    <div className="text-white relative">
      <h1 className="  uppercase font-secondary-font  font-[600] text-center text-[25px] md:text-[50px] mt-10">
        Performances
      </h1>
      <div className="w-3/4 m-auto mt-20">
        <Carousel className="rounded-xl">
          {Workshops.map((workshop) => (
            <div key={workshop.id}>
              <h1 className="text-center font-secondary-font">
                {workshop.nom}
              </h1>
              <img
                src={workshop.image}
                alt={workshop.nom}
                className="rounded-[10px] hover:scale-105 ease-in duration-200  object-cover hover:shadow-2xl transition"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
