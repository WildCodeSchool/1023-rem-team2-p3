import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoNavbar from "../../assets/logo_navbar.svg";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import Button from "../Button/Button";
import NavBarYoussef from "../Navbar/NavBarYoussef";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickSignup = () => {
    navigate("/signup");
  };

  const buttonLogin =
    "bg-gradient-to-r leading-none py-1 px-2 text-[8px] md:text-[12px] md:py-2  md:px-4 from-[#4CACFF] via-[#A070EF] to-[#8E78DA] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF]  ease-in";

  const buttonSignUp =
    "bg-gradient-to-r leading-none py-1 px-2 text-[8px] md:text-[12px] md:py-2  md:px-4 from-[#F5ABF1] via-[#B980F8] to-[#7651FF] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#F5ABF1] hover:via-[#F5ABF1] hover:to-[#F5ABF1]  ease-in";

  return (
    <header className="flex flex-row justify-between items-center bg-background-color-second p-2">
      <BurgerIcon isOpen={isOpen} setOpen={setOpen} />

      <div className="flex items-center text-white ">
        <Link to="/">
          <img
            src={logoNavbar}
            alt="logo"
            className="w-20 h-20 hidden md:flex"
          />
        </Link>
        <h1 className="font-primary-font p-1 fixed left-14 top-1 md:absolute md:left-20 md:top-8">
          THE LAB
        </h1>
      </div>

      <NavBarYoussef isOpen={isOpen} setOpen={setOpen} />

      <div className=" flex items-center gap-2 text-center ">
        <Button
          type="button"
          content="Inscription"
          handleClick={handleClickSignup}
          className={buttonLogin}
        />
        <Button
          type="button"
          content="Connexion"
          handleClick={handleClickLogin}
          className={buttonSignUp}
        />
      </div>
    </header>
  );
}
