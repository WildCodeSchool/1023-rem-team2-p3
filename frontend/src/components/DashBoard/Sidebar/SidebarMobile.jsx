import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Calendar from "../../../assets/icons/calendar.svg";
import Cart from "../../../assets/icons/cart.svg";
import Note from "../../../assets/icons/note.svg";
import Payment from "../../../assets/icons/payment.svg";
import Promo from "../../../assets/icons/promo.svg";
import Score from "../../../assets/icons/score.svg";
import User from "../../../assets/icons/user.svg";
import Miss from "../../../assets/icons/miss.svg";
import Admin from "../../../assets/icons/admin.svg";

import { UserContext } from "../../../context/UserContext";

export default function SidebarMobile() {
  const { user } = useContext(UserContext);

  return (
    <div className="border-background-color-second rounded-b-[20px] border-r-2 w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-primary-font text-center p-4 text-[20px] border-background-color-second rounded-tl-[20px]  ">
        THE LAB
      </h1>
      <div className="grid grid-rows-3 grid-cols-3  py-6 gap-y-10 text-[18px] w-full">
        <NavLink
          to="/backoffice/users"
          className="flex flex-col gap-2 items-center"
        >
          <img src={User} className="w-8" alt="icon_user" />
          <h3>USERS</h3>
        </NavLink>
        <NavLink
          to="/backoffice/events"
          className="flex flex-col gap-2 items-center"
        >
          <img src={Calendar} className="w-8" alt="icon_calendrier" />
          <h3>EVENTS</h3>
        </NavLink>
        <NavLink
          to="/backoffice/notes"
          className="flex flex-col gap-2 items-center"
        >
          <img src={Note} className="w-8" alt="icone_note" />
          <h3>NOTES</h3>
        </NavLink>
        <NavLink
          to="/backoffice/scorecard"
          className="flex flex-col gap-2 items-center"
        >
          <img src={Score} className="w-8" alt="icone_score_card" />
          <h3>SCORE CARD</h3>
        </NavLink>
        <NavLink
          to="/backoffice/payment"
          className="flex flex-col gap-2 items-center"
        >
          <img src={Payment} className="w-8" alt="icone_payment" />
          <h3>PAYMENT</h3>
        </NavLink>
        <NavLink
          to="/backoffice/product"
          className="flex flex-col gap-2 items-center "
        >
          <img src={Cart} className="w-8" alt="icone_panier" />
          <h3>PRODUCT</h3>
        </NavLink>
        <NavLink
          to="/backoffice/codepromo"
          className={({ isActive }) =>
            ` flex flex-col gap-2 items-center col-start-1 col-end-1 row-start-3 row-end-3 text-center ${
              isActive ? "text-gray-400" : ""
            }`
          }
        >
          <img src={Promo} className="w-8" alt="icone_code_promo" />
          <h3>CODE PROMO</h3>
        </NavLink>
        <NavLink
          to="/backoffice/missions"
          className={({ isActive }) =>
            ` flex flex-col gap-2 items-center col-start-3 col-end-3 row-start-3 row-end-3 text-center ${
              isActive ? "text-gray-400" : ""
            }`
          }
        >
          <img src={Miss} className="w-8" alt="icone_code_promo" />
          <h3>MISSIONS</h3>
        </NavLink>
        {user?.data.is_admin === "superAdmin" && (
          <NavLink
            to="/backoffice/role"
            className={({ isActive }) =>
              ` flex flex-col gap-2 items-center col-start-2 col-end-2 row-start-3 row-end-3 text-center ${
                isActive ? "text-gray-400" : ""
              }`
            }
          >
            <img src={Admin} className="w-8" alt="icone_admin" />
            <h3>Admin/User</h3>
          </NavLink>
        )}
      </div>
      <span className=" border-2 border-white w-1/2" />
      <p className="text-center py-8">COMPTE ADMIN</p>
    </div>
  );
}
