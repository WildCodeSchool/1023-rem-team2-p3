import React from "react";
import HeaderCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/HeaderCopilotDesktop";
import SidebarCopiloteDesktop from "../../components/Copilot/LayoutCopilotDesktop/SidebarCopilotDesktop";
import CopilotContactComponent from "../../components/Copilot/CopilotContact/CopilotContactComponent";

export default function CopilotContactPage() {
  return (
    <div className="w-[90%] text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <div className="block lg:hidden">
        <HeaderCopilotDesktop />
        <CopilotContactComponent />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <HeaderCopilotDesktop />
        <div className=" lg:flex lg:flex-row lg:w-full ">
          <SidebarCopiloteDesktop />
          <CopilotContactComponent />
        </div>
      </div>
    </div>
  );
}
