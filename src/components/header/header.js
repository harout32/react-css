import React from "react";
import logoWhite from "../../assets/images/logo-white.png";

const Header = () => (
  <header className="header">
    <div className="logo-box">
      <img className="logo" src={logoWhite} alt="logo" />
    </div>
    <div className="text-box">
    <h1 className="heading-primary">
      <span className="heading-primary-main">Outdoors</span>
      <span className="heading-primary-sub">iswhere life happens</span>
    </h1>
    </div>
    
  </header>
);
export default Header;
