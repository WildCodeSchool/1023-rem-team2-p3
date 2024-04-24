import React, { useState, useEffect } from "react";

export default function CopilotEventComponent() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["Soyez prêts...", "Bientôt disponible !"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < phrases.length) {
        const phrase = phrases[index];
        setText(phrase.substring(0, text.length + 1));
        if (text === phrase) {
          clearInterval(interval);
          setTimeout(() => {
            setText("");
            setIndex((prevIndex) =>
              prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
            );
          }, 1500);
        }
      }
    }, 150);
    return () => clearInterval(interval);
  }, [text, index]);

  return (
    <div className="w-[90%] text-white  font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px]">
      <h1 className="flex justify-center text-center text-violet-500 font-primary-font text-2xl lg:mt-80">
        {text}
      </h1>
    </div>
  );
}
