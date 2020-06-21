import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/constants.css";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navigation  border-bottom modern">
        <nav className="navbar navbar-expand-lg navbar-light shadow-none">
          <div className="container-fluid navigation-inner-container">
            <a className="navbar-brand" href="dashboard">
              <img
                src={process.env.PUBLIC_URL + "/vector/default-monochrome.svg"}
                height="30"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    activeClassName="nav-link-active bounce-in-fwd"
                    className="nav-link"
                    to="dashboard"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="bounce-in nav-link-active"
                    className="nav-link"
                    to="statistics"
                  >
                    Statistics
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="bounce-in nav-link-active"
                    className="nav-link"
                    to="subjects"
                  >
                    Subjects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="bounce-in nav-link-active"
                    className="nav-link"
                    to="tasks"
                  >
                    Tasks
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/media/Avatar-PNG-Download-Image.png"
                      alt="Avatar"
                      height="30"
                      className="avatar rounded"
                    />
                    Hi, Kurmabek
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <div className="dropdown-item">Edit Profile</div>
                    <div className="dropdown-item" href="#">
                      Log Out
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Router />
      </div>
    );
  }
}
