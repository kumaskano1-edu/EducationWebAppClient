import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class DashboardChart extends React.Component {
  state = {
    dataLine: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "This Week",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(251,138,132, .3)",
          borderColor: "#fb8a84",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#fb8a84",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.thisWeek,
        },
        {
          label: "Last Week",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(101, 115, 237, 0.7)",
          borderColor: "#636dff",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#636dff",
          pointBackgroundColor: "#636dff",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#636dff",
          pointHoverBorderColor: "#636dff",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.lastWeek,
        },
      ],
    },
  };

  render() {
    return (
      <MDBContainer>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default DashboardChart;
