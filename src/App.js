import React, { Component } from "react";
import Router from "./Router";
import { connect } from "react-redux";

import Navbar from "./my-pages/Navbar";
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.auth.isAuthenticated ? <Navbar /> : ""}
        <Router />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(App);
