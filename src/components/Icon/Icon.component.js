import React from "react";

const Icon = ({ iconType, iconColor }) => {
  return <span className={`c-icon c-icon--${iconColor} c-icon--${iconType}`} />;
};

export default Icon;
