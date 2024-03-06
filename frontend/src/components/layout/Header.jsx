import React from "react";
import NavbarDesktop from "../Navbar/NavbarDesktop";
import NavbarMobile from "../Navbar/NavbarMobile";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
      <Logo />
    </div>
  );
}

export default Header;
