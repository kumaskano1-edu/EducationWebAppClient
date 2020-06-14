import React, { Component } from "react";

export default class TaskViewModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div class="modal fade" id="TaskViewModal">
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title">{this.props.Info.title}</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">Nothing Imprtant.</div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
