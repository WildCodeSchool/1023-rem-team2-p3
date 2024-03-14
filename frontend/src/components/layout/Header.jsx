import React, { useState } from "react";
// import NavDesktop from "../Navbar/NavDeskop";
// import NavMobile from "../Navbar/NavMobile";
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
    "bg-gradient-to-r leading-none py-3  px-4 from-[#4CACFF] via-[#A070EF] to-[#8E78DA] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF]  ease-in";

  const buttonSignUp =
    "bg-gradient-to-r leading-none py-3  px-4 from-[#F5ABF1] via-[#B980F8] to-[#7651FF] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#F5ABF1] hover:via-[#F5ABF1] hover:to-[#F5ABF1]  ease-in";

  return (
    <header className="flex flex-row justify-between items-center bg-background-color-second px-4">
      <BurgerIcon isOpen={isOpen} setOpen={setOpen} />

      <div className="flex items-center gap-2 text-white">
        <Link to="/">
          <img src={logoNavbar} alt="logo" className="w-20 h-20" />
        </Link>
        <h1 className=" font-primary-font lg:text-[20px] text-[14px]">
          THE LAB
        </h1>
      </div>

      {/* <NavDesktop />
       <NavMobile /> */}
      {/* <Nav1 />
      <Nav2 /> */}

      <NavBarYoussef isOpen={isOpen} />

      <div className=" flex items-center gap-2 text-center pr-5 ">
        <Button
          type="button"
          content="Inscription"
          handleClick={handleClickLogin}
          className={buttonLogin}
        />
        <Button
          type="button"
          content="Connexion"
          handleClick={handleClickSignup}
          className={buttonSignUp}
        />
      </div>
    </header>
  );
}
