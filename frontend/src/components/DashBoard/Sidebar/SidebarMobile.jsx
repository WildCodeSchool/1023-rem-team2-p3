import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiSolidCalendar } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
import { GrScorecard } from "react-icons/gr";
import { MdPayments } from "react-icons/md";
import { HiMiniGift } from "react-icons/hi2";

export default function SidebarMobile() {
  return (
    <div className="border-background-color-second rounded-b-[20px] border-r-2 w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-primary-font text-center p-4 text-[20px] border-background-color-second rounded-tl-[20px]  ">
        THE LAB
      </h1>
      <div className="grid grid-rows-3 grid-cols-3  py-6 gap-y-10 text-[18px] w-full">
        <NavLink to="/users" className="flex flex-col gap-5  items-center ">
          <FaUser size={30} /> USERS
        </NavLink>
        <NavLink to="/events" className="flex flex-col gap-5 items-center">
          <BiSolidCalendar size={30} /> EVENTS
        </NavLink>
        <NavLink to="/notes" className="flex flex-col gap-5 items-center">
          <PiNotePencilBold size={30} /> NOTES
        </NavLink>
        <NavLink to="/scorecard" className="flex flex-col gap-5 items-center">
          <GrScorecard size={30} /> SCORE CARD
        </NavLink>
        <NavLink to="/payment" className="flex flex-col gap-5 items-center">
          <MdPayments size={30} /> PAYMENT
        </NavLink>
        <NavLink to="/product" className="flex flex-col gap-5 items-center ">
          <FaShoppingCart size={30} /> PRODUCT
        </NavLink>
        <NavLink
          to="/codepromo"
          className="flex flex-col gap-5 items-center col-start-2 col-end-2 row-start-3 row-end-3 text-center"
        >
          <HiMiniGift size={30} /> CODE PROMO
        </NavLink>
      </div>
      <span className=" border-2 border-white w-1/2" />
      <p className="text-center py-8">COMPTE ADMIN</p>
    </div>
  );
}
