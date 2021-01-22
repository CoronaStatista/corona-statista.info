import React from "react";
import { Link } from "react-router-dom";
import "./Default.css";

function Header() {
  return (
    <div>
      <div id="header-wrapper">
        <div id="header" className="container">
          <div id="logo">
            <h1>
              <Link to="/">Corona Statista</Link>
            </h1>
          </div>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-links">
                  About Corona <i className="fas fa-caret-down" />
                </Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
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
