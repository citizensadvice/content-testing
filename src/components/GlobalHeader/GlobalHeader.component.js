import React from "react";
import logo from "../../assets/images/citizens_advice_logo.svg";

const GlobalHeader = () => {
  return (
    <header className="c-global-header">
      <div className="c-wrap">
        <div className="c-global-header__product-title">
          <img src={logo} alt="Citizens Advice logo" />
        </div>
        <div className="c-global-header__navigation u-position--right">
          <a href="/" className="c-btn c-btn--secondary">
            Return to dashboard
          </a>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
