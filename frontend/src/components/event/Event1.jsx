import React from "react";
import event1 from "../../assets/event1.svg";
import croix from "../../assets/vector/croix.svg";
import logo from "../../assets/logo.svg";

export default function Event1() {
  return (
    <div className="flex flex-col gap-5">
      <div className="lg:grid lg:grid-cols-[2fr] flex flex-col gap-5 lg:gap-0">
        <h2 className="lg:w-[440px]  lg:col-start-1 lg:col-end-2 w-auto bg-gradient-to-r from-gradient-color2  via-gradient-color3 to-gradient-color1 text-transparent bg-clip-text text-4xl text-center lg:text-left font-secondary-font font-bold">
          Réalisez votre rêve de compétition internationale
        </h2>
        <p className="lg:w-[2/4] lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2 lg:text-left text-white  text-center font-secondary-font text-2xl">
          Les 30 meilleurs scores auront l'opportunité de défier une équipe
          professionnelle aux États-Unis. Soyez parmi les meilleurs et vivez une
          expérience sportive exceptionnelle
        </p>
      </div>
      <div className="flex flex-row sm:justify-around items-center justify-around ">
        <img
          src={event1}
          alt="event"
          className="md:w-72 md:h-72 sm:w-48 sm:h-60 w-24 h-32"
        />
        <img
          src={croix}
          alt="croix"
          className="md:w-32 md:h-32 sm:w-28 sm:h-28 w-10 h-10"
        />
        <img
          src={logo}
          alt="logo"
          className="md:w-72 md:h-60 sm:w-48 sm:h-48 w-24 h-24"
        />
      </div>
    </div>
  );
}
