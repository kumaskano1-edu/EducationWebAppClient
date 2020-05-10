import React from "react";
import "../../../styles/dashboard.css";
import moment from "moment";
export default class SmallCalendar extends React.Component {
  weekdayshort = moment.weekdaysShort();

  constructor(props) {
    super(props);
    this.state = {
      locale: "en",
      dateObject: moment(),
    };
  }
  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };
  month = () => {
    return this.state.dateObject.format("MMMM");
  };
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };
  currentDay = () => {
    return this.state.dateObject.format("D");
  };

  render() {
    let daysInMonth = [];
    let blanks = [];

    let weekdayshortname = this.weekdayshort.map((day) => {
      return <th key={day}>{day}</th>;
    });

    //missing out days that do not fir week days
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }

    // finding the active day
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d === this.currentDay() ? "today" : "";
      daysInMonth.push(
        <td key={d} className="calendar-day">
          <div className={`calendar-day-number ${currentDay}`}>{d}</div>
        </td>
      );
    }
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });
    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });
    return (
      <div className="small-calendar mb-1 modern">
        <div className="calendar-title mr-2 ml-2">
          <h6 className="float-left">
            <strong>Calendar</strong>
          </h6>
          <h6 className="float-right"> {this.month()}</h6>
        </div>
        <div className="calendar-date text-center justify-content-center">
          <table className="calendar-day">
            <thead>
              <tr>{weekdayshortname}</tr>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
