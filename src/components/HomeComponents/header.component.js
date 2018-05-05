import React from "react";
import logoWhite from "../../assets/images/logo-white.png";
import { Link } from "react-router-dom";

const HeaderComponent = () => (
  <header className="header">
    <div className="header__logo-box">
      <img className="header__logo" src={logoWhite} alt="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Outdoors</span>
        <span className="heading-primary--sub">iswhere life happens</span>
      </h1>
      <Link to="/" className="btn btn--white btn--animated">
        discover our tours
      </Link>
    </div>
  </header>
);
export default HeaderComponent;
