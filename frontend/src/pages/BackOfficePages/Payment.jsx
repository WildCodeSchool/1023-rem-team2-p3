import React from "react";
import Sidebar from "../../components/DashBoard/Sidebar";
import Payment from "../../components/DashBoard/Payment/Payment";
import Header from "../../components/DashBoard/HeaderBackOffice";
// import SidebarMobile from "../../components/DashBoard/Sidebar/SidebarMobile";

export default function Notes() {
  return (
    <div className="w-[90%] text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <div className="block lg:hidden">
        <Header />
        <Payment />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <Header />
        <div className=" lg:flex lg:flex-row lg:w-full ">
          <Sidebar />
          <Payment />
        </div>
      </div>
    </div>
  );
}
