import React from "react";
import ScoreCard from "../../../assets/image/ScoreCardMain.png";

export default function CopilotScoreCardNotes() {
  return (
    <div className="flex  justify-center">
      <img
        src={ScoreCard}
        alt="Score Card"
        className=" w-60 h-70 md:w-[500px] md:h-auto  top-0 left-48 "
      />
    </div>
  );
}
