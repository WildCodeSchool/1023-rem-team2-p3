import React from "react";
import Header from "../../components/DashBoard/Header";
import Sidebar from "../../components/DashBoard/Sidebar";
import PromoCode from "../../components/DashBoard/PromoCode/PromoCode";

export default function Notes() {
  return (
    <div className="flex flex-col text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <PromoCode />
      </div>
    </div>
  );
}
