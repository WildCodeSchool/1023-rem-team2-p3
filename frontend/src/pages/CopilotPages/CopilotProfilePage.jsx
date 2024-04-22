import React from "react";
import HeaderCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/HeaderCopilotDesktop";
import HeaderCopilotMobile from "../../components/Copilot/LayoutCopilotMobile/HeaderCopiloteMobile";
import SidebarCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/SidebarCopilotDesktop";
import CopilotProfileComponent from "../../components/Copilot/CopilotProfile/CopilotProfileComponent";

export default function CopilotProfilePage() {
  return (
    <div className="w-[90%] text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <div className="block lg:hidden">
        <HeaderCopilotDesktop />
        <CopilotProfileComponent />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <HeaderCopilotMobile />
        <div className=" lg:flex lg:flex-row lg:w-full ">
          <SidebarCopilotDesktop />
          <CopilotProfileComponent />
        </div>
      </div>
    </div>
  );
}
