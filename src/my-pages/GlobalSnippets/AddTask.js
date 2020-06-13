import React from "react";

export default function AddTask() {
  return (
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        {/* HEADER OF THE MODAL */}
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* /*MODAL BODY*/}
        <div class="modal-body">...</div>
        {/* MODAL FOOTER */}
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
