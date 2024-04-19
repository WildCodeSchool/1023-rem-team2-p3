import React from "react";
import Header from "../../components/DashBoard/Header";
import Sidebar from "../../components/DashBoard/Sidebar";
import SidebarMobile from "../../components/DashBoard/Sidebar/SidebarMobile";
import HeaderM from "../../components/DashBoard/Sidebar/HeaderM";

export default function BackOfficePages() {
  return (
    <div className="w-[90%] my-10">
      <div className=" lg:hidden text-white font-secondary-font bg-[#281f31] w-full h-auto rounded-[20px]">
        <HeaderM />
        <SidebarMobile />
      </div>
      <div className="hidden lg:block lg:text-white lg:font-secondary-font lg:bg-[#281f31] lg:w-full lg:h-auto lg:rounded-[20px]">
        <Header />
        <Sidebar />
      </div>
    </div>
  );
}
