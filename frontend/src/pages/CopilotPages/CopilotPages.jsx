import React from "react";
import HeaderCopilotMobile from "../../components/Copilot/LayoutCopilotMobile/HeaderCopiloteMobile";
import SidebarCopilotMobile from "../../components/Copilot/LayoutCopilotMobile/SidebarCopiloteMobile";
import HeaderCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/HeaderCopilotDesktop";
import SidebarCopiloteDesktop from "../../components/Copilot/LayoutCopilotDesktop/SidebarCopilotDesktop";
import CopilotNotesComponent from "../../components/Copilot/CopilotMain/CopilotNotesComponent";
import CopilotNoteGen from "../../components/Copilot/CopilotMain/CopilotNoteGen";
import CopiloteUserEvent from "../../components/Copilot/CopilotMain/CopiloteUserEvent";
import CopilotQR from "../../components/Copilot/CopilotMain/CopilotQR";
import CopilotChart from "../../components/Copilot/CopilotMain/CopilotChart";

export default function CopilotPages() {
  return (
    <div className="w-auto my-10">
      <div className=" lg:hidden text-white font-secondary-font bg-[#281f31] w-full h-auto rounded-[20px]">
        <HeaderCopilotMobile />
        <SidebarCopilotMobile />
      </div>
      <div className="hidden lg:block lg:text-white lg:font-secondary-font lg:bg-[#281f31] lg:w-full lg:h-auto lg:rounded-[20px]">
        <HeaderCopilotDesktop />
        <div className="flex">
          <SidebarCopiloteDesktop />
          <div className="flex flex-col text-center items-stretch ">
            <CopilotNotesComponent />
            <div className="flex flex-row justify-evenly text-center items-center">
              <CopilotNoteGen />
              <CopiloteUserEvent />
            </div>
            <div className="flex flex-row justify-evenly text-center items-center">
              <CopilotChart />
              <CopilotQR />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
