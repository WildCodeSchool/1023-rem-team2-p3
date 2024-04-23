import { useContext } from "react";
import { FaUser, FaChartLine, FaGift } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineSportsSoccer, MdSports } from "react-icons/md";
import { UserContext } from "../../../context/UserContext";

export default function SidebarCopilotDesktop() {
  const { user } = useContext(UserContext);
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
        <NavLink to="/copilotprofile" className="flex items-center">
          <FaUser className="mr-4" /> PROFILE
        </NavLink>
        <NavLink to="/copilotentrainements" className="flex items-center">
          <MdOutlineSportsSoccer className="mr-4" /> ENTRAINEMENT
        </NavLink>
        <NavLink to="/copilotmissions" className="flex items-center">
          <MdSports className="mr-4" /> MISSIONS
        </NavLink>
        <NavLink to="/copilotcontact" className="flex items-center">
          <IoMailOutline className="mr-4" /> CONTACT
        </NavLink>
        <NavLink to="/copilotcadeaux" className="flex items-center">
          <FaGift className="mr-4" /> CADEAUX
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
