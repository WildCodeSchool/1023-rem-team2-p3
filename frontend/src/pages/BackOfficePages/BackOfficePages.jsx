import React from "react";
import Header from "../../components/DashBoard/Header";
import Sidebar from "../../components/DashBoard/Sidebar";
import MainBackoffice from "../../components/DashBoard/Main/MainBackoffice";
import Calendar from "../../components/DashBoard/Main/Calendar";
import TotalPayments from "../../components/DashBoard/Main/TotalPayments";
import FuturesEvents from "../../components/DashBoard/Main/FuturesEvents";

export default function BackOfficePages() {
  return (
    <div className="flex flex-col text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col">
          <MainBackoffice />
          <div className="flex flex-row">
            <Calendar />
            <TotalPayments />
          </div>
          <FuturesEvents />
        </div>
      </div>
    </div>
  );
}
