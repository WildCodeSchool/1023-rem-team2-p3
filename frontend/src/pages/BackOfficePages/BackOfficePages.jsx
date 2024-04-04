import React from "react";
import Header from "../../components/DashBoard/Header";
import Sidebar from "../../components/DashBoard/Sidebar";

export default function BackOfficePages() {
  return (
    <div className=" text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px]">
      <Header />
      <Sidebar />
    </div>
  );
}
