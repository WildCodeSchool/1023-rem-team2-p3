import React from "react";
import HeaderCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/HeaderCopilotDesktop";
import SidebarCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/SidebarCopilotDesktop";
import CopilotGiftComponent from "../../components/Copilot/CopilotGift/CopilotGiftComponent";

export default function CopilotGiftPage() {
  return (
    <div className="w-[90%] text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <div className="block lg:hidden">
        <HeaderCopilotDesktop />
        <CopilotGiftComponent />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <HeaderCopilotDesktop />
        <div className=" lg:flex lg:flex-row lg:w-full ">
          <SidebarCopilotDesktop />
          <CopilotGiftComponent />
        </div>
      </div>
    </div>
  );
}
