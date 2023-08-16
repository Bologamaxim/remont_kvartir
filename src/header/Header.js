import React from "react";

import "./header.css";
const Header = () => {
  return (
    <div>
      <nav className="header">
        <li className="header__element">
          <a
            href="/"
            className="btn-flip"
            data-back="Перейти"
            data-front="Home"
          ></a>
        </li>
        <li className="header__element">
          <a
            href="/about"
            className="btn-flip"
            data-back="Перейти"
            data-front="Portfolio"
          ></a>
        </li>
        <li className="header__element">
          <a
            href="/"
            className="btn-flip"
            data-back="Перейти"
            data-front="Remont"
          ></a>
        </li>

        <li className="header__element ">
          <a
            href="/price"
            className="btn-flip"
            data-back="Перейти"
            data-front="Price"
          ></a>
        </li>
        <li className="header__element">
          <a
            href="user"
            className="btn-flip"
            data-back="Перейти"
            data-front="Contact"
          ></a>
        </li>
      </nav>
    </div>
  );
};
export default Header;
