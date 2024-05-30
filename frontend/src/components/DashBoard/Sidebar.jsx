// import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Calendar from "../../assets/icons/calendar.svg";
import Cart from "../../assets/icons/cart.svg";
import Note from "../../assets/icons/note.svg";
import Payment from "../../assets/icons/payment.svg";
import Promo from "../../assets/icons/promo.svg";
import Score from "../../assets/icons/score.svg";
import User from "../../assets/icons/user.svg";
import Admin from "../../assets/icons/admin.svg";
import { UserContext } from "../../context/UserContext";

export default function Sidebar() {
  const { user } = useContext(UserContext);

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="border-background-color-second rounded-b-[20px] border-r-2 pr-5 ">
      <div className="border-background-color-second rounded-tl-[20px] ">
        <h1 className="font-primary-font text-center p-4 text-[20px] ">
          THE LAB
        </h1>
      </div>
      <div className="flex flex-col space-y-4 py-4 ml-4 text-[18px]">
        <NavLink to="/backoffice/users" className="flex items-center gap-2">
          <img src={User} className="w-8" alt="icon_user" />
          <h3>USERS</h3>
        </NavLink>
        <NavLink to="/backoffice/events" className="flex items-center  gap-2">
          <img src={Calendar} className="w-8" alt="icon_calendrier" />
          <h3>EVENTS</h3>
        </NavLink>
        <NavLink to="/backoffice/notes" className="flex items-center  gap-2">
          <img src={Note} className="w-8" alt="icone_note" />
          <h3>NOTES</h3>
        </NavLink>
        <NavLink
          to="/backoffice/scorecard"
          className="flex items-center  gap-2"
        >
          <img src={Score} className="w-8" alt="icone_score_card" />
          <h3>SCORE CARD</h3>
        </NavLink>
        <NavLink to="/backoffice/payment" className="flex items-center  gap-2">
          <img src={Payment} className="w-8" alt="icone_payment" />
          <h3>PAYMENT</h3>
        </NavLink>
        <NavLink to="/backoffice/product" className="flex items-center  gap-2">
          <img src={Cart} className="w-8" alt="icone_panier" />
          <h3>PRODUCT</h3>
        </NavLink>
        <NavLink
          to="/backoffice/codepromo"
          className="flex items-center  gap-2"
        >
          <img src={Promo} className="w-8" alt="icone_code_promo" />
          <h3>CODE PROMO</h3>
        </NavLink>
        {user?.data.is_admin === "superAdmin" && (
          <NavLink to="/backoffice/role" className="flex items-center  gap-2">
            <img src={Admin} className="w-8" alt="icone_admin" />
            <h3>Admin/User</h3>
          </NavLink>
        )}
      </div>
      {user?.data.is_admin === "superAdmin" ? (
        <div className="text-center py-40">COMPTE SUPER ADMIN</div>
      ) : (
        <div className="text-center py-40">COMPTE ADMIN</div>
      )}
    </div>
  );
}
