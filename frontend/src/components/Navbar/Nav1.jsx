/* eslint-disable import/no-extraneous-dependencies */
import { useNavigate, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState, React, useRef } from "react";
import { useClickAway } from "react-use";
import logoNavbar from "../../assets/logo_navbar.svg";
import Button from "../Button/Button";

function Nav1() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);

  const activeLink =
    "text-white text-center font-[400] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300 ";
  const inactiveLink =
    "text-white text-center font-[400] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300 ";

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickSignup = () => {
    navigate("/signup");
  };

  useClickAway(ref, () => setOpen(false));

  const buttonLogin =
    "bg-gradient-to-r leading-none py-2  px-2 from-[#4CACFF] via-[#A070EF] to-[#8E78DA] text-white font-[400] text-[10px] w-[60px] h-[25px] flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF]  ease-in ";

  const buttonSignUp =
    "bg-gradient-to-r leading-none py-2  px-2 from-[#F5ABF1] via-[#B980F8] to-[#7651FF] text-white font-[400] text-[10px] w-[60px] h-[25px] flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#F5ABF1] hover:via-[#F5ABF1] hover:to-[#F5ABF1]  ease-in ";

  return (
    <div
      ref={ref}
      className="md:hidden justify-between p-2 gap-28 text-[7px] items-center font-secondary-font flex text-white bg-red-500"
    >
      {/* Menu BURGER */}
      <Hamburger
        toggled={isOpen}
        size={30}
        toggle={setOpen}
        hideOutline={false}
        direction="right"
      />
      {isOpen && (
        <div className="flex flex-col items-center ">
          <NavLink
            onClick={() => setOpen((prev) => !prev)}
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            to="/"
          >
            Accueil
          </NavLink>
          <NavLink
            onClick={() => setOpen((prev) => !prev)}
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            to="/about"
          >
            A propos
          </NavLink>
          <NavLink
            onClick={() => setOpen((prev) => !prev)}
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setOpen((prev) => !prev)}
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            to="/workshops"
          >
            Ateliers
          </NavLink>
          <NavLink
            onClick={() => setOpen((prev) => !prev)}
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            to="/giveaway"
          >
            Jeu concours
          </NavLink>
        </div>
      )}

      {/* Menu BURGER end */}
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logoNavbar} alt="logo" />
        </NavLink>
        <h1 className=" hidden">THE LAB</h1>
      </div>

      {/* Logo end */}
      {/* Button */}
      <div className=" flex items-center gap-2 text-center">
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
      {/* Button end */}
    </div>
  );
}

export default Nav1;
