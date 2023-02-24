import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <a href="#" className="logo">
          NuxtSHOP
        </a>

        <ul className="navlist">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#featured">Featured</a>
          </li>
          <li>
            <a href="#new">New</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="header-icons">
          <a href="#">
            {" "}
            <i className="bx bx-shopping-bag"></i>{" "}
          </a>
          <div className="bx bx-menu" id="menu-icon"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
