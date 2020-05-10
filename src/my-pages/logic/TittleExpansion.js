import React from "react";

export default function TittleExpansion(props) {
  return (
    <div className="modern titles pl-2 pr-2">
      <div className="SubjectTitle">
        <p>{props.title}</p>
      </div>
      <div className="LinkShow">
        <a className="float-right" href="Kuma">
          Show All
        </a>
      </div>
    </div>
  );
}
