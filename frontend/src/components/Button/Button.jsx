/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import React from "react";

export default function Button({ type, handleClick, content, className }) {
  return (
    <button type={type} onClick={handleClick} className={className}>
      {content}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
