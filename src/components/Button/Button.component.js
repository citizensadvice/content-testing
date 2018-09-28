import React from "react";

const Button = ({
  children,
  buttonType,
  buttonOnClick,
  buttonAction,
  inlineStyles
}) => {
  return (
    <button
      className={`c-btn c-btn--${buttonType} c-btn--action-${buttonAction}`}
      onClick={buttonOnClick}
      style={inlineStyles}
    >
      {children}
    </button>
  );
};

export default Button;
