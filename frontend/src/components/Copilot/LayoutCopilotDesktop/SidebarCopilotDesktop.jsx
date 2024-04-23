// import { useState } from "react";
import { FaChartLine, FaGift, FaUser } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineSportsSoccer, MdSports } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function SidebarCopilotDesktop() {
  return (
    <div className="border-background-color-second rounded-b-[20px] border-r-2 pr-5 ">
      <div className="border-background-color-second rounded-tl-[20px] ">
        <h1 className="font-primary-font text-center p-4 text-[20px] ">
          THE LAB
        </h1>
      </div>
      <div className="flex flex-col space-y-4 py-4 ml-4 text-[18px]">
        <NavLink to="/copilot" className="flex items-center">
          <FaChartLine className="mr-4" /> COPILOT
        </NavLink>
        <NavLink to="/copilot/copilotprofile" className="flex items-center">
          <FaUser className="mr-4" /> PROFILE
        </NavLink>
        <NavLink
          to="/copilot/copilotentrainements"
          className="flex items-center"
        >
          <MdOutlineSportsSoccer className="mr-4" /> ENTRAINEMENT
        </NavLink>
        <NavLink to="/copilot/copilotmissions" className="flex items-center">
          <MdSports className="mr-4" /> MISSIONS
        </NavLink>
        <NavLink to="/copilot/copilotcontact" className="flex items-center">
          <IoMailOutline className="mr-4" /> CONTACT
        </NavLink>
        <NavLink to="/copilot/copilotcadeaux" className="flex items-center">
          <FaGift className="mr-4" /> CADEAUX
        </NavLink>
      </div>
      <div className="text-center py-40">AVATAR</div>
    </div>
  );
}
