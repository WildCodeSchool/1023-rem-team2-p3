/* eslint-disable import/no-extraneous-dependencies */
import { useNavigate, NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { useState, React, useRef } from "react";
import { useClickAway } from "react-use";
import logoNavbar from "../../assets/logo_navbar.svg";
import Button from "../Button/Button";

function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);

  const activeLink =
    "text-white text-center font-[400] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300 pr-3";
  const inactiveLink =
    "text-white text-center font-[400] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300 pr-3";

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickSignup = () => {
    navigate("/signup");
  };

  useClickAway(ref, () => setOpen(false));

  return (
    <nav className="w-full h-full absolute block md:hidden ">
      <div className=" p-2 gap-7 text-[7px] font-secondary-font flex text-white bg-background-color-second">
        {/* Menu BURGER */}
        <Hamburger toggled={isOpen} size={10} toggle={setOpen} />
        {isOpen && (
          <div className="flex flex-col">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
              to="/"
            >
              Accueil
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
              to="/about"
            >
              A propos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
              to="/workshops"
            >
              Ateliers
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
              to="/giveaway"
            >
              Jeu concours
            </NavLink>
          </div>
        )}

        {/* Menu BURGER end */}
        {/* Logo */}
        <div className="logo">
          <div className="flex items-center w-10">
            <NavLink to="/">
              <img src={logoNavbar} alt="logo" />
            </NavLink>
            <h1 className=" hidden font-primary-font lg:text-[20px] text-[14px]">
              THE LAB
            </h1>
          </div>
        </div>
        {/* Logo end */}
        {/* Button */}
        <div className=" flex items-center gap-2 text-center pr-5  ">
          <div>
            <Button
              type="button"
              content="Inscription"
              handleClick={handleClickLogin}
              className="bg-gradient-to-r leading-none py-2  px-2 from-[#4CACFF] via-[#A070EF] to-[#8E78DA] text-white font-[500]  w-[50px] h-[10px] flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF]  ease-in "
            />
          </div>
          <div>
            <Button
              type="button"
              content="Connexion"
              handleClick={handleClickSignup}
              className="bg-gradient-to-r leading-none py-2  px-2 from-[#F5ABF1] via-[#B980F8] to-[#7651FF] text-white font-[500] w-[50px] h-[10px] flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#F5ABF1] hover:via-[#F5ABF1] hover:to-[#F5ABF1]  ease-in "
            />
          </div>
        </div>
        {/* Button end */}
      </div>
    </nav>
  );
}

export default NavMobile;
