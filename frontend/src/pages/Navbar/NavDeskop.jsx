import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoNavbar from "../../assets/logo_navbar.svg";
import Button from "../../components/Button/Button";

function NavDesktop() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickSignup = () => {
    navigate("/signup");
  };

  return (
    <nav className="leading-[80px]">
      <div className="navbar-desktop">
        <div className="hidden font-secondary-font md:flex items-center justify-between text-white bg-background-color-second">
          {/* Logo */}
          <div className="logo">
            <div className="flex items-center justify-between gap-4 px-5">
              <Link to="/">
                <img src={logoNavbar} alt="logo" className="w-20 h-20 " />
              </Link>
              <h1 className=" font-primary-font text-[20px]">THE LAB</h1>
            </div>
          </div>
          {/* Logo end */}
          {/* Menu Desktop */}
          <div className="menu-desktop">
            <ul className=" flex items-center gap-10">
              <li className="bg-gradient-to-r from-gradient-color1 via-gradient-color2 to-gradient-color3 text-transparent bg-clip-text font-[700] ">
                <Link to="/">Accueil</Link>
              </li>
              <li className="text-white font-[600] lg:font-[400] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300 ">
                <Link to="/about">A propos</Link>
              </li>
              <li className="text-white font-[600] lg:font-[400] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300 ">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="text-white font-[600] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300">
                <Link to="/workshops">Ateliers</Link>
              </li>
              <li className="text-white font-[600] hover:bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 hover:text-transparent hover:bg-clip-text ease-in duration-300">
                <Link to="/giveaway">Jeu concours</Link>
              </li>
            </ul>
          </div>
          {/* Menu Desktop end */}
          {/* Button */}

          <div className=" flex items-center gap-2 text-center ">
            <Button
              type="button"
              content="Inscription"
              handleClick={handleClickLogin}
              className="bg-gradient-to-r leading-none py-3  px-4 from-[#4CACFF] via-[#A070EF] to-[#8E78DA] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF]  ease-in-out"
            />
            <Button
              type="button"
              content="Connexion"
              handleClick={handleClickSignup}
              className="bg-gradient-to-r leading-none py-3  px-4 from-[#F5ABF1] via-[#B980F8] to-[#7651FF] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#F5ABF1] hover:via-[#F5ABF1] hover:to-[#F5ABF1]  ease-in"
            />
          </div>

          {/* Button end */}
        </div>
      </div>
    </nav>
  );
}

export default NavDesktop;
