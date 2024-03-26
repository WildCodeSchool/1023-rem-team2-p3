import React from "react";
import TopMain from "../../components/TopMain/TopMain";

export default function ForgotPassword() {
  return (
    <>
      <TopMain
        title="Mot de passe oublié"
        description="Récupérez votre mot de passe"
      />
      <div className="xl:w-[700px] mt-8 mb-4 ml-8 mr-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative text-white">
            <input
              type="text"
              id="email"
              name="email"
              className="input"
              required
              autoComplete="email"
            />
            <label
              htmlFor="email"
              className="absolute top-4 left-4 pointer-events-none transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] text-gray-400"
            >
              Email
            </label>
          </div>
          <div className="relative text-white">
            <button
              type="submit"
              className="py-3 px-5 text-md font-bold text-center tracking-widest text-secondary bg-primary focus:outline-none 
                bg-gradient-to-r from-[#4CACFF] via-[#A070EF] to-[#8E78DA] rounded-xl hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF] ease-in font-primary-font w-full md:w-[200px]"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-center mb-[200px]">
        <p className="text-white text-center">
          <a
            className="text-primary-color"
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            Retourner à la page de connexion
          </a>
        </p>
      </div>
    </>
  );
}
