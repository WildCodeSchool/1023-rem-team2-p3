import React from "react";
import Header from "../../components/DashBoard/Header";
import Sidebar from "../../components/DashBoard/Sidebar";
import AddNotes from "../../components/DashBoard/Note/AddNotes";

export default function Notes() {
  return (
    <div className=" text-white font-secondary-font bg-[#281f31] w-[81rem] lg:h-auto rounded-[20px] my-10 ">
      <Header />
      <div className="flex">
        <Sidebar />
        <AddNotes />
      </div>
    </div>
  );
}
