/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from "react";
import atelier from "../../data/Workshops.json";
import PopupAtelier from "./PopupAtelier";

export default function Ateliers() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [selectedAtelier, setSelectedAtelier] = useState(null);
  const [hoveredAtelier, setHoveredAtelier] = useState(null);
  const handleClick = (ateliers) => {
    setSelectedAtelier(ateliers);
    setButtonPopup(true);
  };
  const handleMouseEnter = (ateliers) => {
    setHoveredAtelier(ateliers.id);
  };

  const handleMouseLeave = () => {
    setHoveredAtelier(null);
  };
  return (
    <div className="flex flex-row flex-wrap justify-around gap-5 pb-12 pt-12 gap-y-24">
      {atelier.map((ateliers) => (
        <div
          key={ateliers.id}
          className="flex flex-row flex-wrap items-center"
          onMouseEnter={() => handleMouseEnter(ateliers)}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={() => handleClick(ateliers)}>
            <div className="flex justify-center items-center group ">
              <img
                src={ateliers.image}
                alt="atelier"
                className="md:w-96 md:h-96 w-60 h-60 md:rounded-2xl group-hover:opacity-30 rounded-full md:shadow-none shadow-[0px_0px_15px_30px_#00000024] shadow-white"
              />
              {hoveredAtelier === ateliers.id && (
                <p className="  text-3xl text-white  absolute font-secondary-font ">
                  {ateliers.nom}
                </p>
              )}
            </div>
          </button>
        </div>
      ))}
      <PopupAtelier trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="flex flex-row justify-between items-center md:items-stretch ">
          <div className="flex flex-row gap-5 flex-wrap">
            <h2 className="font-bold font-secondary-font text-primary-color">
              {atelier[selectedAtelier?.id - 1]?.nom}
            </h2>
            <p className="font-secondary-font text-gray-400 mr-2">
              {atelier[selectedAtelier?.id - 1]?.description}
            </p>
          </div>

          <img
            src={atelier[selectedAtelier?.id - 1]?.image}
            alt="atelier1"
            className="md:w-60 md:h-60 w-40 h-40 rounded-2xl "
          />
        </div>
      </PopupAtelier>
    </div>
  );
}
