import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Navbar from "../snippets/Navbar";
import SmallCalendar from "../snippets/SmallCalendar";
import Projects from "../snippets/Projects";
import DashboardChart from "../snippets/DashboardChart";
import Todos from "../snippets/Todos";
import ExamSchedule from "../snippets/ExamSchedule";
import Subjects from "../snippets/Subjects";
import IntroBox from "../snippets/IntroBox";
import TittleExpansion from "../logic/TittleExpansion";
import "react-circular-progressbar/dist/styles.css";
import "../styles/dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        <Navbar />

        <div className="col-md-12">
          <MDBRow>
            <MDBCol lg="9" className="mainDashboard">
              <MDBRow className="LeftSide">
                <MDBCol lg="5">
                  <div className="h-100">
                    {/*INTRODUCTION BOX*/}
                    <div className="introBox pt-4">
                      <IntroBox name="Kurmanbek" />
                    </div>
                    {/* PROJECTS SECTION */}
                    <div className="projects">
                      <Projects Projects={this.state.Projects} />
                    </div>
                    {/* EXAMS SCHEDULE */}
                    <div className="Exams">
                      <ExamSchedule Exams={this.state.Exams} />
                    </div>
                  </div>
                </MDBCol>
                <MDBCol lg="7">
                  <div className="h-100">
                    {/* CHARTS FOR THE ANALYSIS */}
                    <div className="charts pt-3">
                      <TittleExpansion title="Your Activity" info />
                      <DashboardChart thisWeek={week1} lastWeek={week2} />
                    </div>
                    {/* ASSIGNMENTS DONE AND DOING  */}
                    <Todos Todos={this.state.Todos} />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            {/* LEFT SIDE OF THE DASHBOARD */}
            <MDBCol lg="3" className="border-left">
              <MDBRow>
                {/* Small Calendar Widget */}

                <MDBCol
                  sm="12"
                  md="4"
                  lg="12"
                  xl="12"
                  className="border-bottom "
                >
                  <SmallCalendar />
                  {/* My Subjects */}
                </MDBCol>
                <MDBCol sm="12" md="8" lg="12" xl="12" className="">
                  <div className="Subject-cards p-2">
                    <Subjects />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    );
  }
}
export default Dashboard;
