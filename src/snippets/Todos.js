import React, { Component } from "react";
import DateDifference from "../logic/DateDifference";
import TittleExpansion from "../logic/TittleExpansion";
export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
    };
  }

  render() {
    const todos = this.state.Todos;
    return (
      <div>
        <div className="Title">
          <TittleExpansion title="Todo's" />
        </div>
        <div className="Todos">
          {todos.map((todo) => {
            return Todo(todo);
          })}
        </div>
      </div>
    );
  }
}
const Todo = (props) => {
  const highlightCard = props.highlighted ? "primaryTheme highlighted" : "";
  return (
    <div
      className={`assignmentCard hoverable modern mb-2 pl-3 pr-3 shadow-sm ${highlightCard} `}
    >
      <div className="innerCard">
        <div className="Indicator">
          <i
            className={
              props.done
                ? "fas fa-circle DoneIndicator"
                : "fas fa-circle UndoneIndicator"
            }
          ></i>
        </div>
        <div className="TodoSubject titleFont">
          <div className="subject">{props.subject}</div>
          <div className="below greyFont Subjectprofessor">
            {props.professor}
          </div>
        </div>
        <div className="TodoTittle titleFont">
          <div className="title">{props.title}</div>
          <div className="below greyFont type">{props.type}</div>
        </div>
        <div className="timeOfExam titleFont">
          <div className="title">{props.time}</div>
          <div className="greyFont below date">
            {DateDifference(props.dueDate)}
          </div>
        </div>
        {props.done ? (
          <div className="State titleFont Done">
            <button className="customButton FinishedButton" disabled>
              Finished
            </button>
          </div>
        ) : (
          <div className="State titleFont NotDone">
            <button className="customButton">Done</button>
          </div>
        )}
      </div>
    </div>
  );
};
