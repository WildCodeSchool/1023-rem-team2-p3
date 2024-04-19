import PropTypes from "prop-types";
import React from "react";
import StarsCanvas from "../Stars/Stars";

export default function TopMain({ title, description }) {
  return (
    <div className="grid place-items-center font-secondary-font">
      <StarsCanvas />
      <div className="absolute text-center">
        <h1 className="text-6xl font-bold text-transparent bg-gradient-to-b from-gradient-color1 via-gradient-color3 to-gradient-color2 bg-clip-text">
          {title}
        </h1>
        <p className="text-2xl text-white font-bold pt-10">{description}</p>
      </div>
    </div>
  );
}

TopMain.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

TopMain.defaultProps = {
  description: "",
};
