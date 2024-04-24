import { useContext } from "react";
import { FaUser, FaChartLine, FaGift } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineSportsSoccer, MdSports } from "react-icons/md";
import { UserContext } from "../../../context/UserContext";

export default function SidebarCopilotMobile() {
  const { user } = useContext(UserContext);
  return (
    <div className="border-background-color-second rounded-b-[20px] border-r-2 w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-primary-font text-center p-4 text-[20px] border-background-color-second rounded-tl-[20px]  ">
        THE LAB
      </h1>
      <div className="grid grid-rows-3 grid-cols-3  py-6 gap-y-10 text-[18px] w-full">
        <NavLink to="/copilot" className="flex flex-col gap-5  items-center ">
          <FaChartLine size={30} /> COPILOT
        </NavLink>
        <NavLink
          to="/copilotprofile"
          className="flex flex-col gap-5 items-center"
        >
          <FaUser size={30} /> PROFILE
        </NavLink>
        <NavLink
          to="/copilotentrainements"
          className="flex flex-col gap-5 items-center"
        >
          <MdOutlineSportsSoccer size={30} /> ENTRAINEMENT
        </NavLink>
        <NavLink
          to="/copilotmissions"
          className="flex flex-col gap-5 items-center"
        >
          <MdSports size={30} /> MISSIONS
        </NavLink>
        <NavLink
          to="/copilotcontact"
          className="flex flex-col gap-5 items-center"
        >
          <IoMailOutline size={30} /> CONTACT
        </NavLink>
        <NavLink
          to="/copilotcadeaux"
          className="flex flex-col gap-5 items-center "
        >
          <FaGift size={30} /> EVENEMENTS
        </NavLink>
      </div>
      <div className="flex flex-col items-center my-10">
        {user.data.avatar ? (
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${user.data.avatar}`}
            alt="Photos de profil"
            className="w-24 h-24 rounded-full"
          />
        ) : (
          <img
            src="/user.svg"
            alt="Photos de profil"
            className="w-24 h-24 rounded-full"
          />
        )}
      </div>
    </div>
  );
}
