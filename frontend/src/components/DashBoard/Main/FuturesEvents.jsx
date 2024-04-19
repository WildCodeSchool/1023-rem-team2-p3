import React, { useEffect, useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { CiMapPin } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";

export default function FuturesEvents() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
      .then((response) => response.json())
      .then((data) => {
        const filtered = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);
        setEvents(filtered);
      })
      .catch((error) => console.error("Error:", error));
  }, [events]);
  return (
    <div className="text-white  flex flex-col justify-center items-center font-secondary-font text-[16px] m-10 ">
      {events.map((event, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className=" flex justify-between items-center border border-white font-[100] bg-background-color-second cursor-pointer ease-in duration-100 p-5 rounded-[20px] m-1  md:w-[700px] md:h-[60px] w-[500px]  "
        >
          <h3>
            <LuMapPin className="inline-block " /> {event.city}
          </h3>
          <p>
            <MdOutlineDateRange className="inline-block" />{" "}
            <span className="font-secondary-font bg-clip-text text-transparent  text-white">
              {new Date(event.date).toLocaleDateString("fr-FR")}
            </span>
          </p>
          <p>
            <CiMapPin className="inline-block " /> {event.address}
          </p>
          <p className="md:flex md:justify-end md:gap-2">
            <IoTicketOutline className="inline-block " />
            <span className="font-secondary-font  font-bold bg-clip-text text-transparent  text-white">
              {event.quantity}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
