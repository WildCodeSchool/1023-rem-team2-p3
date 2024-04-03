// import React from 'react'
import { useState } from "react";

import image1 from "../../assets/image/ScoreCardMain.png";

export default function CarteInfo() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: image1,
      description:
        "text pour gardien lambda Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      position: 0,
    },
    {
      id: 2,
      src: image1,
      description:
        "text pour joueur dracaufeu de foot Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      position: 1,
    },
    {
      id: 3,
      src: image1,
      description:
        "text pour joueuse endou de foot Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
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
      <div className="flex flex-row justify-center items-center gap-0 relative w-[70%] mr-10 md:mr-20  md:w-[80%] md:h-[400px] h-[100px]">
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
      <p className="text-white md:mt-20 mt-20 pb-20 text-xl md:text-2xl text-center">
        {images[currentIndex].description}
      </p>
    </div>
  );
}
