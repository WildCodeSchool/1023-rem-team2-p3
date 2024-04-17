import React, { useEffect, useState } from "react";
import TopMain from "../../components/TopMain/TopMain";
import Dropdown from "../../components/Dropdown/Dropdown";
import Stepper from "../../components/Stepper/Stepper";

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
