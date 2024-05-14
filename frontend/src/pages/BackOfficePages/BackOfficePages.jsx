import React from "react";
import Header from "../../components/DashBoard/HeaderBackOffice";
import CalendarComponent from "../../components/DashBoard/Main/Calendar";
import FuturesEvents from "../../components/DashBoard/Main/FuturesEvents";
import MainBackoffice from "../../components/DashBoard/Main/MainBackoffice";
import Sidebar from "../../components/DashBoard/Sidebar";
import HeaderM from "../../components/DashBoard/Sidebar/HeaderM";
import SidebarMobile from "../../components/DashBoard/Sidebar/SidebarMobile";

export default function BackOfficePages() {
  return (
    <div className="w-[90%] my-10">
      <div className=" lg:hidden text-white font-secondary-font bg-[#281f31] w-full h-auto rounded-[20px]">
        <HeaderM />
        <SidebarMobile />
      </div>
      <div className="hidden lg:block lg:text-white lg:font-secondary-font lg:bg-[#281f31] lg:w-full lg:h-auto lg:rounded-[20px]">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col w-full">
            <MainBackoffice />
            <div className="flex flex-row justify-center">
              <CalendarComponent />
            </div>
            <FuturesEvents />
          </div>
        </div>
      </div>
    </div>
  );
}
