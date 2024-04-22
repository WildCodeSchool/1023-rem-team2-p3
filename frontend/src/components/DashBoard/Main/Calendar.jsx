/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import {
  format,
  isSameMonth,
  isSameDay,
  startOfMonth,
  addDays,
  subMonths,
  addMonths,
  getDay,
} from "date-fns";

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const daysInMonth = (date) => {
    const firstDayOfMonth = startOfMonth(date);
    const days = [];
    // Trouve le jour de la semaine du premier jour du mois (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)
    const firstDayOfWeek = getDay(firstDayOfMonth);
    // Ajoute les jours du mois précédent si nécessaire pour compléter la première semaine
    for (let i = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; i > 0; i--) {
      const prevDay = addDays(firstDayOfMonth, -i);
      days.push({ date: prevDay, isOutsideMonth: true });
    }
    // Ajoute les jours du mois en cours
    for (let i = 0; i < 31; i++) {
      const day = addDays(firstDayOfMonth, i);
      days.push({ date: day, isOutsideMonth: false });
      if (!isSameMonth(day, date)) break;
    }
    return days;
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const eventDates = events.map((event) => new Date(event.date));

  const handlePrevMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="font-primary-font text-center p-4 text-[20px]">
        <span>Calendrier des événements</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2">
          <button onClick={handlePrevMonth} className="w-10">
            &#8249;
          </button>
          <div>{format(selectedDate, "MMMM yyyy")}</div>
          <button onClick={handleNextMonth} className="w-10">
            &#8250;
          </button>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="grid grid-cols-7 gap-1 mb-2 w-[500px]">
            {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(
              (dayName) => (
                <div key={dayName} className="text-xs text-gray-500 font-bold">
                  {dayName}
                </div>
              )
            )}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {daysInMonth(selectedDate).map(({ date, isOutsideMonth }) => (
              <div
                key={date.toString()}
                className={`px-2 py-1 cursor-pointer ${isSameDay(date, selectedDate) ? "bg-violet-500 text-white" : ""} ${
                  eventDates.some((eventDate) => isSameDay(eventDate, date))
                    ? "bg-red-500 text-white"
                    : ""
                } ${isOutsideMonth ? "text-gray-400" : ""}`}
                onClick={() => handleDateClick(date)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleDateClick(date);
                  }
                }}
                tabIndex={0} // Add tabIndex attribute to make the element focusable
                role="button" // Add role attribute to indicate that the element is interactive
              >
                {format(date, "d")}
              </div>
            ))}
          </div>
        </div>
        <div className="m-5">
          <span className="rounded-full p-1 bg-violet-500 text-white">
            Date actuelle
          </span>{" "}
          <span className="rounded-full p-1 bg-red-500  text-white">
            Date d'événements
          </span>
        </div>
      </div>
    </div>
  );
}
