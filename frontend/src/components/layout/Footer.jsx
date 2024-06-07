import { Link } from "react-router-dom";

import React from "react";
import logoNavbar from "../../assets/logo_navbar.svg";

import french from "../../assets/french.svg";
import facebook from "../../assets/vector/facebook.svg";
import instagram from "../../assets/vector/instagram.svg";
import mail from "../../assets/vector/mail.svg";
import next from "../../assets/vector/next.svg";
import youtube from "../../assets/vector/youtube.svg";
import wild from "../../assets/wild.svg";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex flex-col gap-5 justify-center items-center bg-background-color-first border-t-[1px] border-[#ba80f831]">
      <div className="flex gap-5 flex-col justify-center lg:justify-around lg:gap-48 lg:flex-row">
        <div className="flex gap-2 flex-col justify-center lg:justify-normal  ">
          <Link to="/" className="flex items-center gap-2 text-white ">
            <img src={logoNavbar} alt="logo" className=" w-20 h-20" />
            <h2 className="font-primary-font text-white text-3xl">THE LAB</h2>
          </Link>
          <div className="flex flex-col ml-4 text-white gap-4">
            <p className=" lg:block  lg:font-primary-font hidden">
              STOP DREAMING, START EXCELLING
            </p>
            <p className=" lg:block lg:font-secondary-font  hidden">
              Participer à la plus belle aventure football jamais connue
            </p>
            <p className="text-white  font-secondary-font break-words text-justify w-[25rem]">
              Bienvenue dans The Lab, votre destination pour débloquer tout le
              potentiel footballistique. Notre approche innovante associe
              technologie de pointe et coaching d'experts pour identifier et
              développer les talents. Avec nos évaluations précises et nos
              recommandations personnalisées, chaque joueur peut atteindre de
              nouveaux sommets sur le terrain.
            </p>
          </div>
        </div>

        <div className="flex flex-col   ml-4  gap-4  ">
          <div className="flex flex-col justify-center lg:justify-normal gap-2">
            <h2 className="mt-6 text-white text-2xl font-bold font-secondary-font">
              Nous contactez
            </h2>
            <div className="flex gap-2 items-center">
              <img src={mail} alt="email" className="w-8 h-8" />
              <p className="text-white underline font-secondary-font">
                thelabfr.contact@gmail.com
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <Link to="https://www.facebook.com/">
                <img src={facebook} alt="facebook" className="w-8 h-8" />
              </Link>

              <Link to="https://www.instagram.com/thelabsoccer/">
                <img src={instagram} alt="instagram" className="w-8 h-8" />
              </Link>
              <Link to="https://www.youtube.com/channel/UCuB2YZGqxAXG1-mxpMyAgbA">
                <img src={youtube} alt="youtube" className="w-9 h-9" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-2xl font-bold font-secondary-font">
              Nos partenaires
            </h2>

            <div className="flex gap-10  lg:gap-10 items-center">
              <Link to="https://www.lafrenchtech-stl.com/">
                <img src={french} alt="french" className="h-24 w-24 " />
              </Link>
              <Link to="https://www.wildcodeschool.com/">
                <img
                  src={wild}
                  alt="wild"
                  className="h-24 w-28 lg:h-auto lg:w-auto"
                />
              </Link>
            </div>
            <Link to="/about">
              <div className="flex items-center">
                <p className=" text-learnMore-color font-secondary-font">
                  En savoir plus
                </p>
                <img src={next} alt="next" className="w-8 h-8" />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 ml-4  ">
          <h2 className="mt-6 text-white font-bold font-secondary-font text-2xl ">
            Navigation
          </h2>
          <div className="flex flex-col gap-6">
            <Link to="/" className="text-white font-secondary-font">
              Accueil
            </Link>
            <Link to="/about" className="text-white font-secondary-font">
              A propos
            </Link>
            <Link to="/contact" className="text-white font-secondary-font">
              Contact
            </Link>
            <Link to="/workshops" className="text-white font-secondary-font">
              Ateliers
            </Link>
            <Link to="/giveaway" className="text-white font-secondary-font">
              Jeux Concours
            </Link>
          </div>
        </div>
      </div>
      <div className="w-screen border-t-[1px] border-[#ba80f831] " />
      <p className="text-white text-center font-secondary-font pb-2">
        {`© ${year} THE LAB • Tous droits réservés`}
      </p>
    </footer>
  );
}

export default Footer;
