import React from "react";
import ScoreCardMain from "../../assets/image/ScoreCardMain.png";
import Shadow from "../../assets/image/Shadow.png";

export default function ScoreCard() {
  return (
    <div className="flex mb-8 relative lg:absolute lg:ml-[50rem] lg:mt-[20rem]">
      <img
        src={Shadow}
        alt="Shadow"
        className="w-screen h-[300px] md:h-[1400px]  md:w-[1069px] md:top-[-34rem] relative"
      />
      <img
        src={ScoreCardMain}
        alt="Score Card"
        className="w-60 h-70 md:w-[600px] md:h-auto absolute top-0 left-48 md:left-0  md:-top-40 "
      />
    </div>
  );
}
