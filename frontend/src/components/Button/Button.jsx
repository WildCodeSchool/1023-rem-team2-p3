import React from "react";
import PropTypes from "prop-types";

export default function Button({ type, handleClick, content, className }) {
  return (
    <button type={type} onClick={handleClick} className={className}>
      {content}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
