import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";

const buttonStyles = {
  futures:
    "bg-gradient-to-r leading-none flex justify-center py-2 px-8 lg:w-[230px] lg:h-12 md:w-[200px] md:h-10 text-[15px] md:text-[18px] lg:text-[24px] font-bold from-[#4CACFF] via-[#A070EF] to-[#8E78DA] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF]  ease-in",
  passes:
    "bg-gradient-to-r leading-none flex justify-center py-2 px-8 lg:w-[230px] lg:h-12 md:w-[200px] md:h-10 text-[15px] md:text-[18px] lg:text-[24px] font-bold from-[#F5ABF1] via-[#B980F8] to-[#7651FF] text-white  flex items-center rounded-[20px] hover:bg-gradient-to-r hover:from-[#F5ABF1] hover:via-[#F5ABF1] hover:to-[#F5ABF1]  ease-in",
};

export default function ButtonEvent() {
  return (
    <div>
      <div className=" flex mt-10 items-center justify-center gap-6 mb-36 text-center ">
        <Link to="/login" className={buttonStyles.futures}>
          PARTICIPER
        </Link>

        <Link to="/giveaway" className={buttonStyles.passes}>
          REGLEMENT
        </Link>
      </div>
    </div>
  );
}
