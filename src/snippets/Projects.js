import React, { Component } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import RadialSeparators from "../snippets/RadialSeparators";
import TittleExpansion from "../logic/TittleExpansion";
import DateDifference from "../logic/DateDifference";
import { MDBRow, MDBCol } from "mdbreact";
class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
    };
  }
  render() {
    const colors = ["#f7d050", "#a6e3ed", "#f7d050"];

    const ProjectsInput = this.state.Projects;
    return (
      <div className="Projects modern">
        <TittleExpansion title="Projects" />
        <MDBRow className="project modern p-2">
          {ProjectsInput.map((project) => {
            return Project(project, colors);
          })}
        </MDBRow>
      </div>
    );
  }
}
const Project = (props, colors) => {
  props.count = props.count >= colors.length ? 0 : props.count;
  return (
    <MDBCol sm="12" md="6" lg="12" className="">
      <div className="projectPorgress shadow-sm hoverable modern  p-3 ">
        <div className="progressBar float-left">
          <CircularProgressbarWithChildren
            value={props.percentage}
            strokeWidth={6}
            styles={buildStyles({
              pathColor: colors[props.count],
            })}
          >
            <RadialSeparators
              count={12}
              style={{
                background: "#fff",

                width: "2px",
                // This needs to be equal to props.strokeWidth
                height: `${10}%`,
              }}
            />
            <div style={{ fontSize: 21, marginTop: -5 }}>
              <strong>{props.percentage + "%"}</strong>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="ProjectInfo float-right">
          <h6 className="ProjectTittle titleFont">
            <strong>{props.title}</strong>
          </h6>
          <p className="ProjectSubjects greyFont">
            {props.subject}, {DateDifference(props.dueDate)}
          </p>
          <p className="ProjectDescription"> {props.description} </p>
        </div>
      </div>
    </MDBCol>
  );
};

export default Projects;
