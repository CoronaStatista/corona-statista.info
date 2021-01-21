import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Default.css";

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <div id="header-wrapper">
        <div id="header" className="container">
          <div id="logo">
            <h1>
              <a href="#">Corona Statista</a>
            </h1>
          </div>
          <div id="menu">
            <ul>
              <li>
                <Link to="/" onClick={closeMobileMenu}>
                  Homepage
                </Link>
              </li>

              <li
                className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Corona <i className="fas fa-caret-down" />
                </Link>
              </li>
              <li>
                <Link to="/contact-us" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="banner" className="container">
          <p>
            <b class="text-3xl">Protect yourself and others from COVID-19</b>
            <hr />
          </p>
          <p>
            If COVID-19 is spreading in your community, stay safe by taking some
            simple precautions, such as physical distancing, wearing a mask,
            keeping rooms well ventilated, avoiding crowds, cleaning your hands,
            and coughing into a bent elbow or tissue. Check local advice where
            you live and work. Do it all!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
