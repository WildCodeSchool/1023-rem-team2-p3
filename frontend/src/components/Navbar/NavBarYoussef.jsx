/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useClickAway } from "react-use";

export default function NavBarYoussef({ isOpen, setOpen }) {
  const ref = useRef(null);
  useClickAway(() => setOpen(false), ref);

  const activeLink =
    "text-center text-[40px] lg:text-[18px] bg-gradient-to-r from-gradient-color1 via-gradient-color2 to-gradient-color3 text-transparent bg-clip-text font-bold pr-3";
  const inactiveLink =
    "text-white text-center text-[40px] lg:text-[18px] font-[400] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300 pr-3";
  return (
    <div
      ref={ref}
      className={` flex flex-col  lg:gap-4 lg:pl-60 lg:relative lg:flex lg:flex-row lg:items-center rounded-bl lg:bg-transparent  ${isOpen ? "fixed  h-[100%] w-full justify-evenly top-0 left-0 p-3 text-[15px] z-20 bg-background-color-second" : "hidden"}`}
    >
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
  );
}
