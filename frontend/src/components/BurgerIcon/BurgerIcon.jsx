/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

export default function BurgerIcon({ isOpen, setOpen }) {
  const handleClick = () => setOpen(!isOpen);

  return (
    <button
      className={`${isOpen ? "absolute top-4 left-2 z-40 " : "relative"} flex flex-col  gap-1 lg:hidden`}
      onClick={handleClick}
    >
      {!isOpen ? (
        <div className="flex flex-col gap-2">
          <span className=" w-16 h-[8px] border  border-white rounded bg-white transform transition-all duration-500 " />
          <span className=" w-16 h-[8px] border  border-white  bg-white rounded transform transition-all duration-500" />
          <span className=" w-16 h-[8px] border  border-white  bg-white rounded transform transition-all duration-500" />
        </div>
      ) : (
        <>
          <span className=" top-10 fixed  w-16 h-2 border  border-white  bg-white rounded rotate-45 transform transition-all duration-500" />
          <span className=" top-10 fixed w-16 h-2 border  border-white  bg-white rounded -rotate-45 transform transition-all duration-500" />
        </>
      )}
    </button>
  );
}
