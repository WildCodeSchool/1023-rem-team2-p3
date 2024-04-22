import React from "react";
import HeaderCopilotMobile from "../../components/Copilot/LayoutCopilotMobile/HeaderCopiloteMobile";
import SidebarCopilotMobile from "../../components/Copilot/LayoutCopilotMobile/SidebarCopiloteMobile";
import HeaderCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/HeaderCopilotDesktop";
import SidebarCopiloteDesktop from "../../components/Copilot/LayoutCopilotDesktop/SidebarCopilotDesktop";

export default function CopilotPages() {
  return (
    <div className="w-[90%] my-10">
      <div className=" lg:hidden text-white font-secondary-font bg-[#281f31] w-full h-auto rounded-[20px]">
        <HeaderCopilotMobile />
        <SidebarCopilotMobile />
      </div>
      <div className="hidden lg:block lg:text-white lg:font-secondary-font lg:bg-[#281f31] lg:w-full lg:h-auto lg:rounded-[20px]">
        <HeaderCopilotDesktop />
        <div className="flex flex-row">
          <SidebarCopiloteDesktop />
        </div>
      </div>
    </div>
  );
}
