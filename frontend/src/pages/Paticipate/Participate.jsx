import React from "react";
import Stepper from "../../components/Stepper/Stepper";
import TopMain from "../../components/TopMain/TopMain";

export default function Participate() {
  return (
    <>
      <TopMain
        title="Prêt à relever le défi ? "
        description="Alors inscris toi !"
      />
      <Stepper />
    </>
  );
}
