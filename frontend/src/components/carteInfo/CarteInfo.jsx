// import React from 'react'
import { useState } from "react";

import image1 from "../../assets/image/ScoreCardMen.png";
import image2 from "../../assets/image/ScoreCardWomen.png";
import image3 from "../../assets/image/ScoreCardGoal.png";

export default function CarteInfo() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: image2,
      description:
        "Brillez sur le terrain avec confiance et détermination, mesdames. Peu importe votre position ou votre style de jeu, The Lab vous offre les outils pour vous épanouir et atteindre de nouveaux sommets dans le football féminin.",
      position: 0,
    },
    {
      id: 2,
      src: image1,
      description:
        "Découvrez votre potentiel comme jamais auparavant. Que vous soyez un attaquant flamboyant, un milieu de terrain créatif ou un défenseur solide, The Lab vous guide vers l'excellence.",
      position: 1,
    },
    {
      id: 3,
      src: image3,
      description:
        "Dominez votre surface de réparation avec assurance et précision. Que vous soyez un gardien agile ou un expert en anticipation, The Lab vous aide à perfectionner vos compétences pour être au sommet de votre jeu.",
      position: 2,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleClick = (index) => {
    let direction = 1;
    if (images[index].position === 2) direction = -1;
    const updatedImages = images.map((img) => {
      let newPosition = img.position + direction;
      if (newPosition < 0) newPosition = 2;
      if (newPosition >= images.length) newPosition = 0;
      return { ...img, position: newPosition };
    });

    if (images[index].position === Math.floor(images.length / 2)) {
      return;
    }

    setCurrentIndex(index);
    setImages(updatedImages);
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="flex flex-col justify-center items-center pt-10 relative my-10"
    >
      <h2 className="font-secondary-font text-white font-[600] text-center text-[25px] md:text-[50px] mb-10">
        NOTRE SCORECARD
      </h2>
      <div className="flex flex-row justify-center items-center gap-0 relative w-[80%] md:w-[80%] md:mr-24 lg:mr-0 mr-8 md:h-[400px] h-[100px]">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => handleClick(index)}
            className={`md:w-80 md:h-96 h-36 w-32 transition-all duration-500 ${
              img.position === Math.floor(images.length / 2)
                ? "animate-rotate-y z-10 top-[-10px] md:top-[20px]"
                : "hover:scale-110"
            }`}
            style={{
              position: "absolute ",
              left: `${img.position * (100 / images.length)}%`,
            }}
          >
            <img
              src={img.src}
              alt={img.description}
              className=" md:w-80 md:h-96 h-36 w-32"
            />
          </button>
        ))}
      </div>
      <p className="text-white md:mt-20 mt-20 pb-20 text-xl md:text-2xl text-center md:mx-24 mx-8 lg:w-[800px] w-auto">
        {images[currentIndex].description}
      </p>
    </div>
  );
}
