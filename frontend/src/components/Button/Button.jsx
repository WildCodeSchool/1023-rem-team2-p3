import React from "react";
import PropTypes from "prop-types";

export default function Button({ type, handleClick, content }) {
  return (
    <button type={type} onClick={handleClick}>
      {content}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};
