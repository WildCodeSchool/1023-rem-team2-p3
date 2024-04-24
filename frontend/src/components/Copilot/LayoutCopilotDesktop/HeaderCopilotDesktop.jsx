import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export default function HeaderCopilotDesktop() {
  return (
    <div className=" border-background-color-second rounded-t-[20px] border-2">
      <Link to="/copilot" className="block absolute py-5 lg:hidden ">
        <GoArrowLeft size={30} />
      </Link>
      <h2 className="font-secondary-font  font-[400] text-center text-[25px] lg:text-[20px] my-4 text-white">
        COPILOT
      </h2>
    </div>
  );
}
