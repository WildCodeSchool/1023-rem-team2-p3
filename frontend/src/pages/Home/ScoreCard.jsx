import React from "react";
import ScoreCardMain from "../../assets/image/ScoreCardMain.png";

export default function ScoreCard() {
  return (
    <div className="md:flex mb-12">
      <img
        src={ScoreCardMain}
        alt="Score Card"
        className=" w-60 h-70 md:w-80 md:h-96 ml-20 mr-20"
      />
    </div>
  );
}
