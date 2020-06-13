import React, { Component } from "react";

class AddAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
    };
  }
  render() {
    return (
      <div className="add-project-inner">
        <h5 className="">Add Assignment</h5>
        <p className="">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <form className="d-inline-block">
          <div className="button-extended-icon add-projects-button ">
            <button
              className="btn bg-danger"
              type="button"
              data-toggle="modal"
              data-target="#ModalFade"
            >
              {" "}
              <i className="fas fa-plus"></i>
            </button>
            <span className="button-extended-icon-label ">ADD IT!</span>
          </div>
        </form>
      </div>
    );
  }
}

export default AddAssignment;
