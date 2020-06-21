import React, { Component } from "react";
class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          className="Single-Project"
          data-toggle="modal"
          data-target={`#${this.props.properties.projectId}`}
        >
          <div className="card bg-c-blue project-card">
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
        <div className="modal fade" id={`${this.props.properties.projectId}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title">{this.props.properties.title}</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">Nothing Imprtant.</div>

              {/* <!-- Modal footer --> */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
