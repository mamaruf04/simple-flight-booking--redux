import React from "react";

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT8D2qKm3ZcE-NGL5We7bhbPG8EomMVnkRAA&usqp=CAU'} alt="logo" className="logo" />
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
