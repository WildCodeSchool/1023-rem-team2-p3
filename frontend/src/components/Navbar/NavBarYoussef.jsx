/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarYoussef({ isOpen }) {
  const activeLink =
    "text-center bg-gradient-to-r from-gradient-color1 via-gradient-color2 to-gradient-color3 text-transparent bg-clip-text font-bold pr-3";
  const inactiveLink =
    "text-white text-center font-[400] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300 pr-3";
  return (
    <div
      className={` flex flex-col gap-4 md:relative md:flex md:flex-row md:items-center md:bg-transparent lg:gap-10 ${isOpen ? "absolute top-0 left-0 p-12 bg-slate-600" : "hidden"}`}
    >
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        to="/about"
      >
        A propos
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        to="/workshops"
      >
        Ateliers
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
        to="/giveaway"
      >
        Jeu concours
      </NavLink>
    </div>
  );
}
