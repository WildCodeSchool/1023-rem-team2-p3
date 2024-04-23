import React from "react";
import HeaderCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/HeaderCopilotDesktop";
import CopilotTrainComponent from "../../components/Copilot/CopilotTrain/CopilotTrainComponent";
import SidebarCopilotDesktop from "../../components/Copilot/LayoutCopilotDesktop/SidebarCopilotDesktop";

export default function CopilotTrainingPage() {
  return (
    <div className="w-[90%] text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <div className="block lg:hidden">
        <HeaderCopilotDesktop />
        <CopilotTrainComponent />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <HeaderCopilotDesktop />
        <div className=" lg:flex lg:flex-row lg:w-full ">
          <SidebarCopilotDesktop />
          <CopilotTrainComponent />
        </div>
      </div>
    </div>
  );
}
