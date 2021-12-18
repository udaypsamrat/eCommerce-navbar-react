import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/" exact>
          Digital Shop
        </Link>
        <i
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </i>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              to="/men"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Men
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/men/topwear">
                  Top Wear
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/men/menfootwear">
                  Men Footwear
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/men/innersleep">
                  Inner & Sleep Wear
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/men/sleepwear">
                  Sleep Wear
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/men/bottomWear">
                  Bottom Wear
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              to="/kids"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Kids
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/kids/babycare">
                  Baby Care
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/kids/toys">
                  Toys
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/kids/boysandGirls">
                  Boys & Girls
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white"
              to="/electronics"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Electronics
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/electronics/mobiles">
                  Mobiles
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/electronics/laptops">
                  Laptops
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/electronics/tevelisions">
                  Tevelisions
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              to="/cart"
            >
              <i class="fas fa-cart-plus"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/ContactUs">
              ContactUs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
