// import { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiSolidCalendar } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
import { GrScorecard } from "react-icons/gr";
import { MdPayments } from "react-icons/md";
import { HiMiniGift } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <div className="border-background-color-second rounded-b-[20px] border-r-2 pr-5 ">
      <div className="border-background-color-second rounded-tl-[20px] ">
        <h1 className="font-primary-font text-center p-4 text-[20px] ">
          THE LAB
        </h1>
      </div>
      <div className="flex flex-col space-y-4 py-4 ml-4 text-[18px]">
        <NavLink to="/users" className="flex items-center">
          <FaUser className="mr-4" /> USERS
        </NavLink>
        <NavLink to="/events" className="flex items-center">
          <BiSolidCalendar className="mr-4" /> EVENTS
        </NavLink>
        <NavLink to="/notes" className="flex items-center">
          <PiNotePencilBold className="mr-4" /> NOTES
        </NavLink>
        <NavLink to="/scorecard" className="flex items-center">
          <GrScorecard className="mr-4" /> SCORE CARD
        </NavLink>
        <NavLink to="/payment" className="flex items-center">
          <MdPayments className="mr-4" /> PAYMENT
        </NavLink>
        <NavLink to="/product" className="flex items-center">
          <FaShoppingCart className="mr-4" /> PRODUCT
        </NavLink>
        <NavLink to="/codepromo" className="flex items-center">
          <HiMiniGift className="mr-4" /> CODE PROMO
        </NavLink>
      </div>
      <div className="text-center py-40">COMPT ADMIN</div>
    </div>
  );
}
