import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img style={{ width: "100px" }} src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link style={{ textDecoration: "none" }} to="/">
                <a
                  class="nav-link ms-5 text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <Link
                style={{ textDecoration: "none" }}
                to="/dashboard/appointment"
              >
                <a class="nav-link ms-5 text-white" href="#">
                  Dashboard
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                style={{ textDecoration: "none" }}
                to="/appointment"
              >
                <a class="nav-link ms-5 text-white" href="#">
                  Make Appointment
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                Admin
              </a>
            </li>
            <li class="nav-item">
              <Link to="/login">
                <button class="btn btn-brand ms-5">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
