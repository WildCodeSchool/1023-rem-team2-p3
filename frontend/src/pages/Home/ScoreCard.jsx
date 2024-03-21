import React from "react";
import ScoreCardMain from "../../assets/image/ScoreCardMain.png";
import Shadow from "../../assets/image/Shadow.png";

export default function ScoreCard() {
  return (
    <div className="md:flex mb-12 relative">
      <img src={Shadow} alt="Shadow" className="" />
      <img
        src={ScoreCardMain}
        alt="Score Card"
        className=" w-60 h-70 md:w-80 md:h-96 ml-20 mr-20 absolute top-0 left-0"
      />
    </div>
  );
}
