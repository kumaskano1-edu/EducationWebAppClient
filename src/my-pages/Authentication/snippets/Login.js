import React from "react";
import { Mutation } from "react-apollo";
import { LOGIN } from "../../../state/authentication/authenticationConstants";
import { connect } from "react-redux";

import {
  Authenticated,
  Loading,
} from "../../../state/authentication/actions/Authentication";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      registrationError: null,
      loading: false,
    };
  }
  handleButton() {
    this.setState({ loading: true });
  }
  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const errorMessage =
      this.state.registrationError != null ? "d-block" : "d-none";
    return (
      <div className="form-items modern">
        <div>
          <Mutation
            mutation={LOGIN}
            onCompleted={(data) => {
              this.setState({ loading: false });
              localStorage.setItem("token", data.loginUser.token);
              this.props.auth({
                id: data.loginUser.id,
                token: data.loginUser.token,
                email: this.state.email,
                password: this.state.password,
              });
            }}
            onError={(error) => {
              this.setState({
                loading: false,
                registrationError: error,
              });
            }}
          >
            {(loginUser, { data, error }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  loginUser({
                    variables: {
                      email: this.state.email,
                      password: this.state.password,
                    },
                  });
                }}
              >
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="E-mail Address"
                  required
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.value}
                  required
                  onChange={(e) => this.handleChange(e)}
                />
                {this.state.loading && "Loading..."}
                {this.state.registrationError != null && (
                  <div
                    className={`animated fadeIn ${errorMessage} error-message error mb-2 float-left`}
                  >
                    {this.state.registrationError.graphQLErrors.map(
                      (x) => x.message
                    )}
                  </div>
                )}

                <div className="forgotAndRemember d-inline-block">
                  <div className="custom-control custom-checkbox float-left">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="cb1"
                    />
                    <label className="custom-control-label" htmlFor="cb1">
                      Remember me
                    </label>
                  </div>
                  <div className="forgot float-right">
                    <a href="forget19.html">Forget password?</a>
                  </div>
                </div>
                <div className="form-button mt-3 w-100">
                  <button
                    onClick={() => this.handleButton()}
                    className="buttonSubmit"
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </Mutation>
        </div>
        <div className="other-links">
          <hr />{" "}
          <button
            className="buttonSubmit mb-2 shadow-sm hoverable firebaseui-idp-google flex-center--all noselect"
            data-provider-id="google.com"
          >
            <span className="firebaseui-idp-icon-wrapper">
              <img
                className="firebaseui-idp-icon"
                alt=""
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              />
            </span>
            <span className="normal pl-2">Sign in with Google</span>
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    auth: (user) => dispatch(Authenticated(user)),
    load: () => dispatch(Loading()),
  };
};
export default connect(null, mapDispatchToProps)(Login);
