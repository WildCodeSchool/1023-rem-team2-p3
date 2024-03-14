import React from "react";
import TopMain from "../../components/TopMain/TopMain";
// import StarsCanvas from "../../components/Stars/Stars";

export default function Contact() {
  return (
    <>
      <TopMain title="Contact" description="Une Question ?" />
      <div className="bottom-0 flex relative flex-col justify-center items-center">
        <form className="flex flex-col justify-center items-center">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            className="border-2 border-black"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre email"
            className="border-2 border-black"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            className="border-2 border-black"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-gradient-color1 via-gradient-color3 to-gradient-color2 text-white p-2 rounded-md"
          >
            Envoyer
          </button>
        </form>
      </div>
    </>
    // <div className="relative z-10 font-secondary_font flex flex-wrap justify-center ">
    //   <div className="flex flex-col justify-center items-center">
    //     <h1 className="text-6xl font-bold text-transparent bg-gradient-to-b from-gradient-color1 via-gradient-color3 to-gradient-color2 bg-clip-text">
    //       Contact
    //     </h1>
    //     <p className="text-white">Une Question ?</p>
    //   </div>
    // </div>
  );
}
