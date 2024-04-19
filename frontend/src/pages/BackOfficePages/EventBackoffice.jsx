import React from "react";
import Header from "../../components/DashBoard/Header";
import Sidebar from "../../components/DashBoard/Sidebar";
import EventCard from "../../components/DashBoard/Events/EventCard";

export default function Notes() {
  return (
    <div className=" text-white font-secondary-font bg-[#281f31] w-[81rem] lg:h-auto rounded-[20px] my-10 ">
      <Header />
      <div className="flex">
        <Sidebar />
        <EventCard />
      </div>
    </div>
  );
}
