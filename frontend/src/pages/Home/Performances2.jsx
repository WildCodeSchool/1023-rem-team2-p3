/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Worshops from "../../data/Workshops.json";

export default function Performances2() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1729,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1649,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="text-white">
        <h1 className="uppercase font-secondary-font  font-[600] text-center text-[25px] md:text-[50px] mt-10">
          Performances2
        </h1>
      </div>
      <div className="mx-auto w-full text-white">
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          initialSlide={settings.initialSlide}
          responsive={settings.responsive}
        >
          {Worshops.map((workshops) => (
            <div key={workshops.id} className="text-white">
              <h2 className=" font-primary-font text-[30px] text-center font-bold bg-clip-text text-transparent  bg-gradient-to-b from-gradient-color1 via-gradient-color3 to-gradient-color2 my-10">
                {workshops.nom}
              </h2>
              <img
                src={workshops.image}
                alt={workshops.nom}
                className="flex h-64 w-96 object-cover rounded-[50px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
