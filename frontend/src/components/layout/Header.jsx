import React from "react";
import NavDesktop from "../../pages/Navbar/NavDeskop";
import NavMobile from "../../pages/Navbar/NavMobile";

export default function Header() {
  return (
    <header>
      <NavDesktop />
      <NavMobile />
    </header>
  );
}
