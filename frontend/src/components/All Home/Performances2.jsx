/* eslint-disable no-lone-blocks */
/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import { React } from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Workshops from "../../data/Workshops.json";
import Button from "../Button/Button";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 4,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function SamplePrevArrow({ onClick }) {
  return (
    <div className="flex justify-end items-center">
      <button onClick={onClick} aria-label="Previous">
        <FaArrowRight className=" text-gradient-color1 hidden md:block w-44 h-20 z-10 pt-10" />
      </button>
    </div>
  );
}

function SampleNextArrow({ onClick }) {
  return (
    <div className="flex justify-start items-center">
      <button onClick={onClick} aria-label="Next">
        <FaArrowLeftLong className="text-gradient-color1 hidden md:block w-44 h-20 z-10 pt-10" />
      </button>
    </div>
  );
}
function Slide({ workshop }) {
  return (
    <div
      key={workshop.id}
      className="text-white flex justify-center items-center text-center mt-10"
    >
      <img
        src={workshop.image}
        alt={workshop.nom}
        className=" h-64 w-72 object-cover rounded-[50px]"
      />
    </div>
  );
}

export default function Performances2() {
  const buttonPrimary =
    " font-primary-font md:relative py-2 px-4 lg:w-[230px] lg:h-12 md:w-[200px] md:h-10 text-[15px] md:text-[18px] lg:text-[24px] font-bold bg-gradient-to-r from-gradient-color2 via-gradient-color3 to-gradient-color1 text-white text-center items-center rounded-[20px] hover:bg-gradient-to-r hover:from-gradient-color3 hover:via-gradient-color3 hover:to-gradient-color3  ease-in";
  const navigate = useNavigate();
  const handleClickWorkshops = () => {
    navigate("/workshops");
  };
  return (
    <>
      <div className="text-white text-center mt-20">
        <h1 className="uppercase font-secondary-font  font-[600] text-center text-[25px] md:text-[50px]">
          Performances
        </h1>
      </div>
      <div className="w-[90vw]">
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          initialSlide={settings.initialSlide}
          autoplay={settings.autoplay}
          autoplaySpeed={settings.autoplaySpeed}
          pauseOnHover={settings.pauseOnHover}
          nextArrow={settings.nextArrow}
          prevArrow={settings.prevArrow}
          responsive={settings.responsive}
        >
          {Workshops.map((workshop) => (
            <Slide key={workshop.id} workshop={workshop} />
          ))}
        </Slider>
      </div>

      <div className="flex justify-center items-center text-center mt-36 ">
        <Button
          type="button"
          content="Decouvrir"
          handleClick={handleClickWorkshops}
          className={buttonPrimary}
        />
      </div>
    </>
  );
}

Slide.propTypes = {
  workshop: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

SampleNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
