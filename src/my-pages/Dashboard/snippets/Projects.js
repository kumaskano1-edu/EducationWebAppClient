import React, { Component } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import RadialSeparators from "./RadialSeparators";
import TittleExpansion from "../../logic/TittleExpansion";
import DateDifference from "../../logic/DateDifference";
import { MDBRow, MDBCol } from "mdbreact";
class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
    };
  }
  render() {
    return (
      <div className="projects-viewer-wrapper">
        <div className="inner-elements-projects-section col-md-12">
          <div className="row inner">
            <div class="add-projects py-5 col-sm-4 col-md-5">
              <h5 class="">Add Assignment</h5>
              <p class="">
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </p>
              <form className="d-inline-block">
                <div class="button-extended-icon add-projects-button ">
                  <button className="btn bg-danger">
                    {" "}
                    <i class="fas fa-plus"></i>
                  </button>
                  <span class="button-extended-icon-label ">ADD IT!</span>
                </div>
              </form>
            </div>
            <div className="existing-projects col-md-8"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
