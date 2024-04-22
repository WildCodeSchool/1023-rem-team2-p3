import React from "react";
import Header from "../../components/DashBoard/HeaderBackOffice";
import Sidebar from "../../components/DashBoard/Sidebar";
import ProductDashBoard from "../../components/DashBoard/Product/ProductDashBoard";

export default function Notes() {
  return (
    <div className="w-[90%] text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <div className="block lg:hidden">
        <Header />
        <ProductDashBoard />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <Header />
        <div className=" lg:flex lg:flex-row lg:w-full ">
          <Sidebar />
          <ProductDashBoard />
        </div>
      </div>
    </div>
  );
}
