import React from "react";
import NavDesktop from "../Navbar/NavDeskop";
import NavMobile from "../Navbar/NavMobile";

export default function Header() {
  return (
    <header>
      <NavDesktop />
      <NavMobile />
    </header>
  );
}
