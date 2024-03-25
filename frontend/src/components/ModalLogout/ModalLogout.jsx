/* eslint-disable react/prop-types */
import Button from "../Button/Button";

export default function ModalLogOut({ show, handleClick, setShow }) {
  return (
    <div
      className={`${
        show
          ? "fixed top-0 right-0 left-0 bottom-0 w-full h-screen bg-black bg-opacity-50 z-20"
          : "hidden"
      }`}
    >
      <div
        className={`${
          show
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-gradient-to-t from-gradient-color1  via-gradient-color3 to-gradient-color2 p-12 border-2 rounded-md z-20"
            : "hidden"
        }`}
      >
        <p className="pb-4">Voulez-vous vous déconnecter de l'application ?</p>
        <Button
          type="button"
          content="confirmer"
          handleClick={handleClick}
          className="border-2 rounded-xl bg-slate-700 p-2 hover:bg-white transition-all"
        />
        <button onClick={() => setShow(false)}>
          <img
            className="w-4 absolute right-2 top-2"
            src="/croix.svg"
            alt="exit"
          />
        </button>
      </div>
    </div>
  );
}
