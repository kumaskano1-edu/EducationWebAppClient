import React, { Component } from "react";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
  MDBCol,
} from "mdbreact";
import TittleExpansion from "../logic/TittleExpansion";
import "../styles/dashboard.css";
class Subjects extends Component {
  render() {
    return (
      <div className="subjects">
        <TittleExpansion title="Subjects" />
        <div className="innerSubjects">
          <MDBRow>
            {Subject()}
            {Subject()}
            {Subject()}
            {Subject()}
            {Subject()}
            {Subject()}
          </MDBRow>
        </div>
      </div>
    );
  }
}
function Subject(props) {
  return (
    <MDBCol md="6" lg="12" xl="12" sm="12">
      <figure className="fir-image-figure">
        <div className="SubjectImage">
          <img
            class="fir-author-image fir-clickcircle"
            src={require("../assets/SubjectLetters/P.svg")}
            alt="Physics"
          />
        </div>
        <div className="SubjectCardTittle">
          <figcaption>
            <div class="titleFont">
              <strong>Physics</strong>
            </div>
            <div class="fig-author-figure-title muted">
              <span className="muted greyFont">12:00 PM,</span> Felix Amoruwa
            </div>
          </figcaption>
        </div>
        <div className="togleMenuSubjects">
          <MDBDropdown dropleft className="dropdownTogggle">
            <MDBDropdownToggle nav caret className=" greyFont">
              <div class={`fas fa-ellipsis-h greyFont`}></div>
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-left pull-left" left>
              <MDBDropdownItem href="#!" className="modern">
                Show Todos
              </MDBDropdownItem>
              <MDBDropdownItem href="#!" className="modern">
                Add Todo
              </MDBDropdownItem>
              <MDBDropdownItem href="#!" className="modern">
                Subject Overview
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
      </figure>
    </MDBCol>
  );
}
export default Subjects;
