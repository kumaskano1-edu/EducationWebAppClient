import React, { Component } from "react";
import Dashboard from "./my-pages/Dashboard";
import Navbar from "./snippets/Navbar";
import Router from "./Router";
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router />
      </div>
    );
  }
}

export default App;
