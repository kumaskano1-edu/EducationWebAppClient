import React, { Component } from "react";
import "../../styles/constants.css";
import "../../styles/auth.css";
import Login from "./snippets/Login";
import Register from "./snippets/Register";
class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }
  render() {
    return (
      <div className="authentication modern animated fadeIn">
        <div className="background-holder ">
          <div className="form-holder card ">
            <div className="form-content text-center">
              <div className="forming">
                <img
                  className="logo"
                  src={process.env.PUBLIC_URL + "vector/default-monochrome.svg"}
                  alt="logo"
                />
              </div>
              <div className="auth">
                <div className="pointer mr2 button">
                  {this.state.login ? <Login /> : <Register />}
                </div>
              </div>
            </div>
            <div className="mt-10 w-100">
              {this.state.login
                ? "Dont have an account REGISTER"
                : "Already have an account LOGIN"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Authentication;
