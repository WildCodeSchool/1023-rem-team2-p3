import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiSolidCalendar } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
import { GrScorecard } from "react-icons/gr";
import { MdPayments } from "react-icons/md";
import { HiMiniGift } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <div className="border-background-color-second rounded-b-[20px] border-r-2 lg:w-[250px] ">
      <div className="border-background-color-second rounded-tl-[20px] border-b-2">
        <h1 className="font-primary-font text-center p-4 text-[20px] ">
          THE LAB
        </h1>
      </div>
      <div className="flex flex-col space-y-4 py-4 ml-4 text-[18px]">
        <NavLink to="/users">
          <FaUser /> USERS
        </NavLink>
        <NavLink to="/events">
          <BiSolidCalendar /> EVENTS
        </NavLink>
        <NavLink to="/notes">
          <PiNotePencilBold /> NOTES
        </NavLink>
        <NavLink to="/scorecard">
          <GrScorecard /> SCORE CARD
        </NavLink>
        <NavLink to="/payment">
          <MdPayments /> PAYMENT
        </NavLink>
        <NavLink to="/product">
          <FaShoppingCart /> PRODUCT
        </NavLink>
        <NavLink to="/codepromo">
          <HiMiniGift /> CODE PROMO
        </NavLink>
      </div>
      <div className="text-center py-40">COMPT ADMIN</div>
    </div>
  );
}
