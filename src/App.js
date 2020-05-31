import React, { Component } from "react";
import Router from "./Router";
import Navbar from "./my-pages/Navbar";
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
