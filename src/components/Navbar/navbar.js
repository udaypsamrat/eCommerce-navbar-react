import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Smiley-image😍
        </Link>
        <samp
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          bg="white"
        >
          <i className="fas fa-bars"></i>
        </samp>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              to="/"
            >
              Flowers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              to="/natures"
            >
              Nature
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              to="/log-in"
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/contact">
              About&Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
