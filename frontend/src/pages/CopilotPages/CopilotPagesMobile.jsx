import React from "react";
import HeaderCopilotMobile from "../../components/Copilot/LayoutCopilotMobile/HeaderCopiloteMobile";
import HeaderCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/HeaderCopilotDesktop";
import SidebarCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/SidebarCopilotDesktop";
import CopilotNotesComponent from "../../components/Copilot/CopilotMain/CopilotNotesComponent";
import CopilotNoteGen from "../../components/Copilot/CopilotMain/CopilotNoteGen";
import CopilotUserEvent from "../../components/Copilot/CopilotMain/CopiloteUserEvent";
import CopilotQR from "../../components/Copilot/CopilotMain/CopilotQR";
import CopilotChart from "../../components/Copilot/CopilotMain/CopilotChart";

export default function CopilotPages() {
  return (
    <div className="w-[90%] md:w-auto text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <div className="block lg:hidden">
        <HeaderCopilotDesktop />
        <CopilotNotesComponent />
        <CopilotNoteGen />
        <CopilotUserEvent />
        <CopilotQR />
        <CopilotChart />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <HeaderCopilotMobile />
        <div className="flex">
          <SidebarCopilotDesktop />
          <div className="flex flex-col justify-center text-center items-center">
            <CopilotNotesComponent />
            <CopilotNoteGen />
            <CopilotUserEvent />
            <CopilotQR />
            <CopilotChart />
          </div>
        </div>
      </div>
    </div>
  );
}
