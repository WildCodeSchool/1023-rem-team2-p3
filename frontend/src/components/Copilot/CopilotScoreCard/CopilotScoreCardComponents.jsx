import React from "react";
import CopilotNotesInfo from "./CopilotNotesInfo";
import CopilotScoreCardNotes from "./CopilotScoreCardNotes";

export default function CopilotScoreCardComponents() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center text-center items-center m-10">
        <h2 className=" text-2xl font-primary-font mb-4">Mes notes</h2>
        <p className="text-xl font-secondary-font">
          Vous pouvez consulter les notes que vous avez reçues lors de votre
          dernier événement
        </p>
      </div>
      <CopilotScoreCardNotes />
      <CopilotNotesInfo />
    </div>
  );
}
