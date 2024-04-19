/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { isSameDay } from "date-fns";

export default function MainBackoffice() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  console.info("events:", events);
  console.info("selectedDate:", selectedDate);
  console.info("selectedEvent:", selectedEvent);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        console.info("data:", data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleDateClick = (date) => {
    const event = events.find((event) => isSameDay(new Date(event.date), date));
    setSelectedEvent(event || null);
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 ">
      <h1 className="font-primary-font text-center p-4 text-[20px]">
        Calendrier des événements
      </h1>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className={(date) => {
          if (!events) {
            return "bg-background-color-second rounded-lg shadow p-4 mx-8 w-96 h-52";
          }
          const eventDates = events.map((event) => new Date(event.date));
          return eventDates.find((d) => isSameDay(d, date))
            ? "text-pink-500 bg-blue-500 rounded-full"
            : "bg-background-color-second rounded-lg shadow p-4 mx-8 w-96 h-52";
        }}
        onClickDay={handleDateClick}
      />
      {selectedEvent && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">
            Événement du {selectedEvent.date}
          </h2>
          <p>Ville : {selectedEvent.city}</p>
          <p>Adresse : {selectedEvent.address}</p>
          <p>Quantité : {selectedEvent.quantity}</p>
          <p>Statut : {selectedEvent.status}</p>
        </div>
      )}
    </div>
  );
}
