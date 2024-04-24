import React from "react";
import { FaChartLine, FaGift, FaUser } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineSportsSoccer, MdSports } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function SidebarCopilotMobile() {
  return (
    <div className="border-background-color-second rounded-b-[20px] border-r-2 w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-primary-font text-center p-2 text-[20px] border-background-color-second rounded-tl-[20px]  ">
        THE LAB
      </h1>
      <div className="grid grid-rows-3 grid-cols-2 md:grid-cols-3 py-6 gap-y-10 text-[18px] w-full">
        <NavLink to="/copilot" className="flex flex-col gap-5  items-center ">
          <FaChartLine size={30} /> COPILOT
        </NavLink>
        <NavLink
          to="/copilot/copilotprofile"
          className="flex flex-col gap-5 items-center"
        >
          <FaUser size={30} /> PROFILE
        </NavLink>
        <NavLink
          to="/copilot/copilotentrainements"
          className="flex flex-col gap-5 items-center"
        >
          <MdOutlineSportsSoccer size={30} /> ENTRAINEMENT
        </NavLink>
        <NavLink
          to="/copilot/copilotmissions"
          className="flex flex-col gap-5 items-center"
        >
          <MdSports size={30} /> MISSIONS
        </NavLink>
        <NavLink
          to="/copilot/copilotcontact"
          className="flex flex-col gap-5 items-center"
        >
          <IoMailOutline size={30} /> CONTACT
        </NavLink>
        <NavLink
          to="/copilot/copilotcadeaux"
          className="flex flex-col gap-5 items-center "
        >
          <FaGift size={30} /> CADEAUX
        </NavLink>
      </div>
      <span className=" border-2 border-white w-1/2" />
      <p className="text-center py-8">AVATAR</p>
    </div>
  );
}
