import React from "react";
import image from '../../html/img/lws-logo.svg';

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <img src={image} alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
