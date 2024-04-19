import React, { useEffect, useState } from "react";

export default function MainBackoffice() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  console.info("totalOrders", totalOrders);
  console.info("totalEvents", totalOrders);
  console.info("totalUsers", totalOrders);

  useEffect(() => {
    // Users
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/total`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const total = data.totalUsers.length || "toto";
        setTotalUsers(total);
      })
      .catch((error) => console.error("Error:", error));
    console.info("totalUsers", totalUsers);

    // Events
    // fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events/total`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const total = data.total || "toto";
    //     setTotalEvents(total);
    //     console.info("totalEvents", totalEvents);
    //   })
    //   .catch((error) => console.error("Error:", error));

    // Tickets
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/order/total`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const total = data.totalOrders.length || "toto";
        setTotalOrders(total);
        console.info("totalOrders", totalOrders);
      });
  }, [totalUsers, totalEvents, totalOrders]);
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
    </div>
  );
}
