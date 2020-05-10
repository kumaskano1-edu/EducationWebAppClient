import React, { Component } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import TittleExpansion from "../../logic/TittleExpansion";
class ExamSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
    };
  }

  render() {
    const Exams = this.state.Exams;
    return (
      <div>
        <TittleExpansion title="Exams" />
        {Exams.map((exam) => {
          return Exam(exam);
        })}
      </div>
    );
  }
}
function Exam(props) {
  const first = props.first ? "FirstSubject primaryTheme" : "ExamSchedule";
  const togler = props.first ? "whiteFont" : "greyFont";
  return (
    <div className={`card cardCustom modern ${first}`}>
      <div className="innerCardExams align-middle p-2 pr-3 pl-3">
        <div className="TextsInnerCardExams">
          <div className="SubjectTittle text-wrap titleFont card-item">
            <strong>{props.title}</strong>
          </div>
          <div className="DayofWeek card-item pl-1">{props.day}</div>
          <div className="Professor card-item">{props.professor}</div>
          <div className="timeOfExam card-item">{props.time}</div>
        </div>
        <div className="MenuTogler">
          <MDBDropdown dropleft>
            <MDBDropdownToggle nav caret className="modern">
              <div class={`fas fa-ellipsis-h greyFont ${togler}`}></div>
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-default" left>
              <MDBDropdownItem href="#!" className="modern">
                My account
              </MDBDropdownItem>
              <MDBDropdownItem href="#!" className="modern">
                Log out
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
      </div>
    </div>
  );
}

export default ExamSchedule;
