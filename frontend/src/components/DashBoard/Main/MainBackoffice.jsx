import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";

export default function MainBackoffice() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalInscriptions, setTotalInscriptions] = useState(0);
  const { token } = useContext(UserContext);
  useEffect(() => {
    // Users
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/total`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const total = data.totalUsers[0].totalUsers || "toto";
        setTotalUsers(total);
      })
      .catch((error) => console.error("Error:", error));

    // Events
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const total = data.length;
        setTotalEvents(total);
      });

    // Tickets;
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/order`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const total = data.length;
        setTotalOrders(total);
      });

    // Inscriptions
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/stockEvent`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const total = data.length;
        console.info("data", data);
        setTotalInscriptions(total);
      });
  }, []);
  return (
    <div className="flex justify-around my-8 mx-12 gap-12">
      <div className="rounded-full border-white border-2 bg-background-color-second text-white w-36 h-36 flex justify-center items-center flex-col">
        <span className="text-xl font-bold">{totalUsers}</span>
        <span className="text-sm">Utilisateurs inscrits</span>
      </div>
      <div className="rounded-full border-white border-2 bg-background-color-second text-white w-36 h-36 flex justify-center items-center flex-col">
        <span className="text-xl font-bold">{totalEvents}</span>
        <span className="text-sm">Événements</span>
      </div>
      <div className="rounded-full border-white border-2 bg-background-color-second text-white w-36 h-36 flex justify-center items-center flex-col">
        <span className="text-xl font-bold">{totalOrders}</span>
        <span className="text-sm">Tickets vendus</span>
      </div>
      <div className="rounded-full border-white border-2 bg-background-color-second text-white w-36 h-36 flex justify-center items-center flex-col">
        <span className="text-xl font-bold">{totalInscriptions}</span>
        <span className="text-sm">Inscriptions</span>
      </div>
    </div>
  );
}
