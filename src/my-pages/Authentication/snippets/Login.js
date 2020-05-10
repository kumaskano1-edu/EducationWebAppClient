import React from "react";
import { Mutation } from "@apollo/react-components";

import { LOGIN } from "../../../redux/AuthReducers";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange(e) {
    e.preventDefault();
    const { value, name } = e.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="form-items modern">
        <h3>Login to account</h3>
        <p className="mb-5 greyFont">
          Access to the most powerfull tool for student time management
        </p>
        <div>
          <form>
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="E-mail Address"
              required
            />
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <div
              className={`animated fadeIn error-message error mb-2 float-left`}
            >
              * Credentials are wrong
            </div>
            <div className="forgotAndRemember d-inline-block">
              <div class="custom-control custom-checkbox float-left">
                <input type="checkbox" class="custom-control-input" id="cb1" />
                <label class="custom-control-label" for="cb1">
                  Remember me
                </label>
              </div>
              <div className="forgot float-right">
                <a href="forget19.html">Forget password?</a>
              </div>
            </div>
            <div className="form-button mt-3 w-100">
              <button className="buttonSubmit">Login</button>
            </div>
          </form>
        </div>
        <div className="other-links">
          <hr />{" "}
          <button
            class="buttonSubmit mb-2 shadow-sm hoverable firebaseui-idp-google flex-center--all noselect"
            data-provider-id="google.com"
          >
            <span class="firebaseui-idp-icon-wrapper">
              <img
                class="firebaseui-idp-icon"
                alt=""
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              />
            </span>
            <span class="normal pl-2">Sign in with Google</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Login;