import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import "../styles/navbar.css";
import "../styles/constants.css";
export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseID: "",
    };
  }

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = (collID) => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: "" });
  };

  render() {
    const { collapseID } = this.state;

    return (
      <Router>
        <div className="bg-white nav-fixed fixed-top">
          <MDBNavbar className="navi border-bottom" expand="lg">
            <MDBNavbarBrand href="#">
              <img
                src={process.env.PUBLIC_URL + "/vector/default-monochrome.svg"}
                height="30"
                alt=""
              />
            </MDBNavbarBrand>
            <MDBNavbarToggler
              color="black"
              image="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
              className="hamburger"
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <MDBCollapse id="mainNavbarCollapse" isOpen={collapseID} navbar>
              <MDBNavbarNav center="true" className="naviLinks">
                <MDBNavItem>
                  <MDBNavLink
                    activeClassName="activeLink bounceIn"
                    exact
                    to="dashboard"
                    className="NavbarLink"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong className="modern">Dashboard</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    activeClassName="activeLink bounceIn"
                    exact
                    to="Calendar"
                    className="NavbarLink"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong className="modern">Calendar</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    activeClassName="activeLink bounceIn"
                    exact
                    to="subject"
                    className="NavbarLink"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong className="modern">Subjects</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    activeClassName="activeLink bounceIn"
                    exact
                    to="tasks"
                    className="NavbarLink"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong className="modern">Tasks</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    activeClassName="activeLink bounceIn"
                    exact
                    to="statistics"
                    className="NavbarLink"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong className="modern">Statistics</strong>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      nav
                      caret
                      className="avatar NavbarLink modern"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                        className="rounded-circle z-depth-0 mr-auto pr-1"
                        style={{ height: "35px", padding: 0 }}
                        alt="Kurmanbek"
                      />{" "}
                      Kurmanbek
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default" left="true">
                      <MDBDropdownItem href="#!" className="modern">
                        My account
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" className="modern">
                        Log out
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </div>
      </Router>
    );
  }
}
