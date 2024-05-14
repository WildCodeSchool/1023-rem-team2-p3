/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";

export default function CopilotMissionComponent() {
  const mission = [
    {
      id: 1,
      missi: "Réalise 2 passes décisives durant le même match.",
      status: "Non commencé",
      difficulty: 1,
    },
    {
      id: 2,
      missi:
        "Réalise 10 passes précises dans les pieds au sol durant le même match.",
      status: "Non commencé",
      difficulty: 2,
    },
    {
      id: 3,
      missi: "Marquez 3 buts durant le même match.",
      status: "Non commencé",
      difficulty: 3,
    },
    {
      id: 4,
      missi: "Cours 5 km durant le même match.",
      status: "Non commencé",
      difficulty: 2,
    },
    {
      id: 5,
      missi: "Gagne 5 duels de la tête durant le même match.",
      status: "Non commencé",
      difficulty: 2,
    },
    {
      id: 6,
      missi: "Réalise 5 interceptions défensives.",
      status: "Non commencé",
      difficulty: 1,
    },
  ];

  const [missions, setMissions] = useState(mission);

  const renderStars = (difficulty) => {
    const stars = [];
    for (let i = 1; i <= 3; i++) {
      stars.push(
        <span key={i} className="text-yellow-500 text-4xl">
          <svg
            className="w-7 h-auto"
            fill={i <= difficulty ? "white" : "grey"}
            stroke="#FFFFFF"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2L9 10l-8 1 6 6-2 9 8-5 8 5-2-9 6-6-8-1-3-8z"
            />
          </svg>
        </span>
      );
    }
    return stars;
  };

  const handleClick = (id, currentStatus) => {
    const updatedMissions = missions.map((miss) =>
      miss.id === id
        ? {
            ...miss,
            status:
              currentStatus === "Non commencé"
                ? "En cours"
                : currentStatus === "En cours"
                  ? "Terminé"
                  : "Non commencé",
          }
        : miss
    );
    setMissions(updatedMissions);
  };

  return (
    <div className="flex flex-col text-white font-secondary-font items-center w-full py-5">
      <h1 className="text-2xl pb-4 text-center">Vos missions :</h1>
      <div className="flex flex-row justify-around items-center w-[95%] h-[50px] gap-5 bg-[#5b4f67]">
        <p className="w-[240px] md:w-20 text-center hidden md:block">
          Difficulté
        </p>
        <p className="w-auto md:w-[240px] text-center">Description</p>
        <p className="w-auto md:w-[134px] md:p-2 text-center">Status</p>
      </div>
      {missions.map((miss, index) => (
        <div
          key={miss.id}
          className={`flex flex-row justify-around items-center h-[105px] w-[95%] md:h-[72px] gap-2 ${
            index % 2 === 0 ? "bg-background-color-second" : "bg-[#5b4f67]"
          }`}
        >
          <div className="w-20 md:flex md:flex-row hidden">
            {renderStars(miss.difficulty, miss.id)}
          </div>
          <p className="w-[240px] hidden md:block text-center">{miss.missi}</p>
          <div className="flex flex-col justify-center items-center w-full  md:hidden">
            <div className=" flex flex-row h-auto">
              {renderStars(miss.difficulty, miss.id)}
            </div>
            <p className="w-48 text-center">{miss.missi}</p>
          </div>
          <button
            onClick={() => handleClick(miss.id, miss.status)}
            className="rounded-lg mr-2 md:mr-0 border-2 hover:bg-white hover:text-black h-[67px] md:h-[50px] p-2 w-full md:w-[134px]"
          >
            {miss.status}
          </button>
        </div>
      ))}
    </div>
  );
}
