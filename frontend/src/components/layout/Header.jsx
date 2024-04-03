import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoNavbar from "../../assets/logo_navbar.svg";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import Button from "../Button/Button";
import NavBarYoussef from "../Navbar/NavBarYoussef";
import ModalLogout from "../ModalLogout/ModalLogout";
import { UserContext } from "../../context/UserContext";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  // console.info("User", user);
  // console.info("user.data.avatar", user.data.avatar);
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setUser({});
    localStorage.removeItem("token");
  };

  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickSignup = () => {
    navigate("/signup");
  };

  const buttonLogin =
    "bg-gradient-to-r leading-none py-1 px-2 text-[8px] md:text-[12px] md:py-2  md:px-4 from-[#4CACFF] via-[#A070EF] to-[#8E78DA] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF]  ease-in";

  const buttonSignUp =
    "bg-gradient-to-r leading-none py-1 px-2 text-[8px] md:text-[12px] md:py-2  md:px-4 from-[#F5ABF1] via-[#B980F8] to-[#7651FF] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#F5ABF1] hover:via-[#F5ABF1] hover:to-[#F5ABF1]  ease-in";

  return (
    <header className="flex flex-row justify-between items-center bg-background-color-second p-2 font-secondary-font">
      <BurgerIcon isOpen={isOpen} setOpen={setOpen} />

      <div className="flex items-center text-white ">
        <Link to="/">
          <img
            src={logoNavbar}
            alt="logo"
            className="lg:w-20 lg:h-20 hidden md:w-10 md:h-10 md:flex"
          />
        </Link>
        <h1 className="font-primary-font p-1 left-14 top-1   md:initial lg:left-20 lg:top-8">
          THE LAB
        </h1>
      </div>
      <NavBarYoussef isOpen={isOpen} />
      {user.isLogged ? (
        <>
          <ModalLogout
            show={show}
            handleClick={handleClick}
            setShow={setShow}
          />
          <div className="flex gap-6 text-white mr-10 items-center">
            <button
              className="bg-transparent border-none"
              type="button"
              // onClick={}
            >
              {user.data.avatar !== null ? (
                <>
                  <img
                    className="w-8 rounded-full"
                    src={`${import.meta.env.VITE_BACKEND_URL}/${
                      user.data.avatar
                    }`}
                    alt="avatarUser"
                  />
                  <p className="text-white">Mon profile</p>
                </>
              ) : (
                <div className="flex flex-row items-center gap-2">
                  <img className="w-8" src="/user.svg" alt="userAvatar" />
                  <p className="text-white">Mon profile</p>
                </div>
              )}
            </button>
            <button
              className="bg-transparent border-none"
              type="button"
              onClick={() => setShow(true)}
            >
              <img className="w-8" src="/logout.svg" alt="logout" />
            </button>
          </div>
        </>
      ) : (
        <div className=" flex items-center gap-2 text-center pr-2">
          <Button
            type="button"
            content="Inscription"
            handleClick={handleClickSignup}
            className={buttonLogin}
          />
          <Button
            type="button"
            content="Connexion"
            handleClick={handleClickLogin}
            className={buttonSignUp}
          />
        </div>
      )}
    </header>
  );
}
