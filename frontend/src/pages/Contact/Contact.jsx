import React from "react";
import StarsCanvas from "../../components/Stars/Stars";

export default function Contact() {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden h-[20rem]">
      <h1 className="text-4xl font-bold text-center">Contact</h1>
      <StarsCanvas />
    </div>
  );
}
