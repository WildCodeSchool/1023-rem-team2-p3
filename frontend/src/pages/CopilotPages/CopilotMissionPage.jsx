import React from "react";
import HeaderCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/HeaderCopilotDesktop";
import SidebarCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/SidebarCopilotDesktop";
import CopilotMissionComponent from "../../components/Copilot/CopilotMission/CopilotMissionComponent";

export default function CopilotMissionPage() {
  return (
    <div className="w-[90%] text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <div className="block lg:hidden">
        <HeaderCopilotDesktop />
        <CopilotMissionComponent />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <HeaderCopilotDesktop />
        <div className=" lg:flex lg:flex-row lg:w-full ">
          <SidebarCopilotDesktop />
          <CopilotMissionComponent />
        </div>
      </div>
    </div>
  );
}
