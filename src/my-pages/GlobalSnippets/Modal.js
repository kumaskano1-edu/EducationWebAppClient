import React, { Component } from "react";
import AddTask from "../GlobalSnippets/AddTask";
export default class Modal extends Component {
  render() {
    return (
      <div
        class="modal fade"
        id="ModalFade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <AddTask />
      </div>
    );
  }
}
