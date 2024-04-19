/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { isSameDay } from "date-fns";

export default function MainBackoffice() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events);
      })
      .catch((error) => console.error("Error:", error));
  }, [events]);

  return (
    <div className="flex flex-col justify-center items-center p-4 ">
      <h1 className="font-primary-font text-center p-4 text-[20px]">
        Calendrier des evenments
      </h1>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className=" bg-background-color-second rounded-lg shadow p-4  mx-8 w-96 h-52"
        tileClassName={({ date }) => {
          if (!events) {
            return null;
          }
          const eventDates = events.map((event) => new Date(event.date));
          return eventDates.find((d) => isSameDay(d, date))
            ? "text-pink-500 bg-blue-500 rounded-full"
            : null;
        }}
      />
    </div>
  );
}
