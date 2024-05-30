/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import footballPlayerPic from "../../assets/image/Frame 5.png";
import calendar from "../../assets/image/calendar.png";
import children from "../../assets/image/children.png";
import coach from "../../assets/image/coach.png";
import { services } from "../../data/constants";
import TopMain from "../../components/TopMain/TopMain";

function ServiceCard({ title, picture }) {
  return (
    <Tilt
      className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <div className="bg-tertiary rounded-[20px] py-5  min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={picture}
          alt="web-development"
          className="w-[90px] h-[90px] rounded-[50px]"
        />
        <h3 className="text-white text-[20px] font-bold text-center drop-shadow-lg">
          {title}
        </h3>
      </div>
    </Tilt>
  );
}

export default function About() {
  const textGradient = {
    background: "linear-gradient(90deg, #9EEDFE, #E34BD1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <div className="font-secondary-font w-full flex justify-center items-center flex-col">
      <TopMain title="A propos" description="Venez découvrir le concept !" />
      <div className="font-secondary_font min-h-[calc(100vh-160px)] flex flex-col flex-wrap justify-center bg-gradient-to-b from-background-color-second to-background-color-first ">
        <div className="z-10 flex flex-col m-auto justify-center mt-'4rem' h-[350px] md:h-[500px] md:w-[600px]">
          <img
            className="firstPic"
            src={footballPlayerPic}
            alt="Avatar"
            data-aos="fade-up"
            data-aos-duration="3000"
          />
        </div>
        <div className="z-10 flex mt-20 text-center justify-center text-[1.2rem] text-white">
          <em data-aos="fade-up" data-aos-duration="3000">
            "Si vous ne croyez pas que c'est possible,
            <br />
            vous n'avez aucune chance de gagner"
          </em>
        </div>
        <div className="z-10 flex text-center justify-center font-bold text-[2rem] text-white mb-[13rem] md:mb-[350px]">
          <h2 data-aos="fade-up" data-aos-duration="3000">
            Arsène Wenger
          </h2>
        </div>

        <div
          className="container mx-auto px-4 relative mt-[68px] flex flex-wrap flex-col items-center text-center bottom-[166px] lg:text-left lg:items-left"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            src={coach}
            alt="Expérience THE LAB"
            className="h-40  mb-[20px] lg:h-[170px] lg:absolute lg:top-[-70px] lg:right-[12%]"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white lg:text-[33px]">
              L'expérience THE LAB
            </h2>
            <p className="text-white mb-4 lg:m-0 lg:mr-[385px] lg:mb-[125px]">
              Le concept est simple : Tu t’inscris à un de nos événements proche
              de chez toi, Tu viens préparé et dans ta meilleure forme afin de
              passer nos épreuves... Suite à ta participation, tu recevras une
              carte THE LAB avec tes statistiques ! (moyenne générale, notes
              vitesse/puissance/vista/force/technique ...)
            </p>
          </div>
        </div>

        <div
          className="container px-4 relative mb-20"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="flex flex-wrap flex-col items-center text-center lg:text-right">
            <img
              src={children}
              alt="Expérience THE LAB"
              className="h-40  mb-[20px] lg:absolute lg:left-[121px] lg:bottom-[14px]"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white lg:text-[33px]">
                Un football pour tous !
              </h2>
              <p className="text-white mb-4  mr-[54px] ml-[54px] lg:mr-0 lg:ml-[406px]">
                Chez THE LAB, tout le monde est la bienvenue. Nos valeurs
                reposent sur l’inclusivité, la solidarité, l’esprit
                communautaire et la bienveillance. La seule chose qui compte
                réellement, c’est votre passion du ballon rond.
              </p>
            </div>
          </div>
        </div>

        <div
          className="container mx-auto px-4 m-14 relative lg:mt-[150px]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="flex flex-wrap flex-col items-center text-center">
            <img
              src={calendar}
              alt="Expérience THE LAB"
              className="h-40  mb-[20px] lg:absolute lg:right-[12%]"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white lg:text-left">
                Inscris toi à un événement... <br />
                OU PLUSIEURS !
              </h2>
              <p className="text-white mb-4  mr-[54px] ml-[54px] lg:ml-0 lg:mr-[432px] lg:text-left">
                Avec THE LAB, vous pouvez vous inscrire à plusieurs événements !
                N’hésitez pas à tenter votre chance, si jamais vous souhaitez
                améliorer vos performances, il vous sera toujours possible de
                tirer le maximum de votre potentiel... Nos tarifs sont évolutifs
                : si vous avez déjà fait une session, nous vous ferons une offre
                plus souple Aussi, de nombreux événements seront prévus,
                n’hésitez pas à consulter notre agenda !
              </p>
            </div>
          </div>
        </div>
        <h1
          className="z-10 text-center justify-center top-20 font-bold text-[4rem] mb-[20px] md:mt-[100px]"
          style={textGradient}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          THE LAB SQUAD
        </h1>
      </div>
      <div
        className="mt-20 flex gap-10 mb-[200px]  w-[50%] px-0 sm:px-6 flex-col lg:flex-row lg:w-full justify-around items-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {services.map((service, index) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Link to={service.Portfolio}>
            <ServiceCard key={service.title} index={index} {...service} />
          </Link>
        ))}
      </div>
    </div>
  );
}
