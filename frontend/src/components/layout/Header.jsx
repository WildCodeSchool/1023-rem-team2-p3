import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoNavbar from "../../assets/logo_navbar.svg";
import { UserContext } from "../../context/UserContext";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import ModalLogout from "../ModalLogout/ModalLogout";
import NavBarYoussef from "../Navbar/NavBarYoussef";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { user, setUser, setIsAuthenticated, isAuthenticated, updateToken } =
    useContext(UserContext);

  const [navig, setNavig] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setUser({});
    setIsAuthenticated(false);
    updateToken();
    setShow(false);
    setNavig("");
    navigate("/");
  };
  const buttonLogin =
    "bg-gradient-to-r leading-none py-1 px-2 text-[8px] md:text-[12px] md:py-2  md:px-4 from-[#4CACFF] via-[#A070EF] to-[#8E78DA] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF]  ease-in";

  const buttonSignUp =
    "bg-gradient-to-r leading-none py-1 px-2 text-[8px] md:text-[12px] md:py-2  md:px-4 from-[#F5ABF1] via-[#B980F8] to-[#7651FF] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#F5ABF1] hover:via-[#F5ABF1] hover:to-[#F5ABF1]  ease-in";

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.data.is_admin === "user") {
        setNavig("copilot/dashboard");
      } else {
        setNavig("backoffice");
      }
    }
  }, [isAuthenticated, user]);

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
            <button className="bg-transparent border-none" type="button">
              {user.data.avatar !== null ? (
                <Link to={navig}>
                  <div className="flex flex-row items-center gap-2">
                    <img
                      className="w-8 rounded-full"
                      src={`${import.meta.env.VITE_BACKEND_URL}/${
                        user.data.avatar
                      }`}
                      alt="avatarUser"
                    />
                    <p className="text-white">Mon profile</p>
                  </div>
                </Link>
              ) : (
                <Link to={navig}>
                  <div className="flex flex-row items-center gap-2">
                    <img className="w-8" src="/user.svg" alt="userAvatar" />
                    <p className="text-white">Mon profile</p>
                  </div>
                </Link>
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
          <Link to="/signup" className={buttonLogin}>
            Inscription
          </Link>
          <Link to="/login" className={buttonSignUp}>
            Connexion
          </Link>
        </div>
      )}
    </header>
  );
}
