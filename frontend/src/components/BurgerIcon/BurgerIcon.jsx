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
          <span className=" w-8 h-[2px] border  border-blue-500 rounded bg-blue-500 transform transition-all duration-500 " />
          <span className=" w-8 h-[2px] border  border-blue-500  bg-blue-500 rounded transform transition-all duration-500" />
          <span className=" w-8 h-[2px] border  border-blue-500  bg-blue-500 rounded transform transition-all duration-500" />
        </>
      ) : (
        <>
          {" "}
          <span className=" absolute  w-8 h-[2px] border  border-blue-500  bg-blue-500 rounded rotate-45 transform transition-all duration-500  " />
          <span className=" w-8 h-[2px] border  border-blue-500  bg-blue-500 rounded -rotate-45 transform transition-all duration-500 " />
        </>
      )}

      {/* <div className="relative flex overflow-hidden items-center justify-center  w-[40px] h-[40px] transform transition-all   duration-200 ">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10" />
          <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75" />
          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150" />

          <div className="absolute  items-center justify-between transform transition-all duration-500   -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
            <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45" />
            <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45" />
          </div>
        </div>
      </div> */}
    </button>
  );
}
