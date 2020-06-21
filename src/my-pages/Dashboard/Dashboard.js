import React, { Component } from "react";
import Projects from "./snippets/Projects";
import AddAssignment from "./snippets/AddAssignment";
import "react-circular-progressbar/dist/styles.css";
import "../../styles/dashboard.css";
import { connect } from "react-redux";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }
  componentDidMount() {
    this.setState({ ...this.props });
  }
  render() {
    // const week1 = [1, 12, 14, 16, 12, 12, 1];
    // const week2 = [1, 12, 10, 16, 12, 12, 1];
    return (
      <div className="dashboard-body">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-9 main-content">
              {/* PROJECTS SECTION */}
              <div className="projects-section bg-danger">
                <div className="projects-viewer-wrapper">
                  <div className="inner-elements-projects-section col-md-12">
                    <div className="row inner">
                      <div className="add-projects py-5 col-sm-12 col-md-3">
                        <AddAssignment />
                      </div>
                      <div className="show-projects py-3 col-sm-8 col-md-9">
                        <div className="row">
                          {this.props.personal.Projects.map((elem) => {
                            return (
                              <Projects
                                key={elem.projectId}
                                properties={elem}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 bg-primary todays-agenda">d</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  personal: state.personal,
});

export default connect(mapStateToProps, null)(Dashboard);
