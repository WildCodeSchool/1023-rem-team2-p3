/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useClickAway } from "react-use";

export default function NavBarYoussef({ isOpen, setOpen }) {
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  const activeLink =
    "text-center bg-gradient-to-r from-gradient-color1 via-gradient-color2 to-gradient-color3 text-transparent bg-clip-text font-bold pr-3";
  const inactiveLink =
    "text-white text-center font-[400] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300 pr-3";
  return (
    <div
      ref={ref}
      className={` flex flex-col gap-1 md:gap-4 md:relative md:flex md:flex-row md:items-center rounded-bl md:bg-transparent lg:gap-10 ${isOpen ? "absolute top-7 items-start left-0 p-3 text-[8px] z-10 bg-background-color-second" : "hidden"}`}
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
