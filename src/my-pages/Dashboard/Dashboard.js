import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import SmallCalendar from "./snippets/SmallCalendar";
import Projects from "./snippets/Projects";
import DashboardChart from "./snippets/DashboardChart";
import Todos from "./snippets/Todos";
import ExamSchedule from "./snippets/ExamSchedule";
import Subjects from "./snippets/Subjects";
import IntroBox from "./snippets/IntroBox";
import TittleExpansion from "../logic/TittleExpansion";
import "react-circular-progressbar/dist/styles.css";
import "../../styles/dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: ["#f7d050", "#a6e3ed", "#f7d050"],
      Projects: [
        {
          title: "Physics Project For Today",
          percentage: "55",
          subject: "Physics",
          description: "Simple project deployed for the help of thi",
          dueDate: "12/15/2029",
          count: 0,
        },
        {
          title: "Mathematics Project Project For Today",
          percentage: "55",
          subject: "Mathematics",
          description: "Simple project deployed for the help of thi",
          dueDate: "12/15/2020",
          count: 1,
        },
      ],
      Todos: [
        {
          title: "Finish Doung my Homework",
          subject: "Physics",
          type: "Assignment",
          professor: "Frederic Rodrigez",
          time: "12:45 AM",
          dueDate: "05/07/2020",
          done: true,
        },
        {
          title: "Finish Doung my Homework",
          subject: "Computer Science",
          type: "Assignment",
          professor: "Felix Amoruwa",
          time: "12:45 AM",
          dueDate: "05/07/2020",
          done: false,
          highlighted: true,
        },
        {
          title: "Finish Doung my Homework",
          subject: "Physics",
          type: "Assignment",
          professor: "Frederic Rodrigez",
          time: "12:45 AM",
          dueDate: "05/07/2020",
          done: false,
        },
        {
          title: "Finish Doung my Homework",
          subject: "Physics",
          type: "Assignment",
          professor: "Frederic Rodrigez",
          time: "12:45 AM",
          dueDate: "05/07/2020",
          done: false,
        },
      ],
      Exams: [
        {
          title: "Physics",
          day: "Tue",
          professor: "Felix A",
          time: "12:24pm",
          first: true,
        },
        {
          title: "Mathematics",
          day: "Thu",
          professor: "Gorilla L",
          time: "8:54am",
        },
        {
          title: "Computer Science",
          day: "Thu",
          professor: "Gorilla L",
          time: "8:54am",
        },
      ],
    };
  }
  render() {
    const week1 = [1, 12, 14, 16, 12, 12, 1];
    const week2 = [1, 12, 10, 16, 12, 12, 1];
    return (
      <div className="dashboard-body">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-9 main-content">
              <div className="projects-section bg-danger">
                <Projects />
              </div>
            </div>
            <div className="col-md-3 bg-primary todays-agenda">d</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
