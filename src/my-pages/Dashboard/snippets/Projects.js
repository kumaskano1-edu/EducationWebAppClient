import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="col-md-4">
        <div className="card p-3 bg-c-blue project-card">
          <div className="card-block">
            <h2 className="text-left">
              <i className="fa fa-cart-plus f-left"></i>
            </h2>
            <p className="m-b-0 ">
              <span className="f-right"> {this.props.properties.title}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
