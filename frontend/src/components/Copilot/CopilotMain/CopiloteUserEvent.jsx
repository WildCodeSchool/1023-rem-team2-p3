/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { CiMapPin } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";

export default function CopilotUserEvent() {
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/stockEvent/user`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserEvents(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <div className="font-primary-font text-center p-4 text-2xl">
        <span>Mes prochains événements </span>
      </div>
      <div className="text-white font-secondary-font text-[16px] md:text-[20px]">
        {userEvents.map((event, index) => (
          <div
            key={index}
            className="md:grid md:items-center justufy-evenly text-center border border-white font-[100] bg-[#4D3E5C] cursor-pointer ease-in duration-100 p-5 rounded-[20px] m-1  md:w-[500px] w-[270px]"
          >
            <h3>
              <LuMapPin className="inline-block" /> Ville : {event.city}
            </h3>
            <p>
              <MdOutlineDateRange className="inline-block" />{" "}
              <span className="font-secondary-font bg-clip-text text-transparent text-white">
                Date : {new Date(event.date).toLocaleDateString("fr-FR")}
              </span>
            </p>
            <p>
              <CiMapPin className="inline-block" />
              Adresse : {event.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
