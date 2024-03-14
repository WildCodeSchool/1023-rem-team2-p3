/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

export default function BurgerIcon({ isOpen, setOpen }) {
  const handleClick = () => setOpen(!isOpen);

  return (
    <button
      className={`${isOpen ? "absolute top-4 left-2 z-10 " : "relative"} flex flex-col  gap-1 md:hidden`}
      onClick={handleClick}
    >
      {!isOpen ? (
        <>
          <span className=" w-6 h-[2px] border  border-white rounded bg-white transform transition-all duration-500 " />
          <span className=" w-6 h-[2px] border  border-white  bg-white rounded transform transition-all duration-500" />
          <span className=" w-6 h-[2px] border  border-white  bg-white rounded transform transition-all duration-500" />
        </>
      ) : (
        <>
          <span className=" absolute  w-6 h-[2px] border  border-white  bg-white rounded rotate-45 transform transition-all duration-500  " />
          <span className=" w-6 h-[2px] border  border-white  bg-white rounded -rotate-45 transform transition-all duration-500 " />
        </>
      )}
    </button>
  );
}
