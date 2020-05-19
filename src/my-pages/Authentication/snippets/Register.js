import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      success: false,
      submitted: false,
      //styling component
      background: "",
    };
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submitted: true,
    });
    if (this.state.success) {
      //TODO: write what happens if succesfuly
    }
  }

  async checkPasses(e) {
    if (
      this.state.password === e.target.value &&
      this.state.password.length > 0 //check if passwords mathc and password is not empty
    ) {
      await this.setState({
        success: true,
        background: "",
      });
    } else if (
      this.state.success === true && //check if passwords still match, after success turned true
      this.state.password !== e.target.value
    ) {
      await this.setState({
        success: false,
        background: "bg-danger",
      });
    } else {
      this.setState({
        background: "bg-danger",
      });
    }
  }

  render() {
    const errorMessage =
      this.state.submitted && !this.state.success ? "d-block" : "d-none";
    const styling =
      !this.state.success && this.state.background !== "" ? "passNoMatch" : "";
    return (
      <div className="form-items modern">
        <form>
          <div className="row">
            <div className="col-md-6 inputBox">
              {" "}
              <input
                className="col-md-12 form-control"
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="col-md-6 inputBox">
              {" "}
              <input
                className="col-md-12 form-control"
                type="text"
                name="email"
                placeholder="E-mail Address"
                required
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="col-md-12 inputBox">
              {" "}
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="col-md-12 inputBox">
              {" "}
              <input
                className={`form-control ${styling}`}
                type="password"
                name="RetypePassword"
                placeholder="Retype password"
                required
                onChange={(e) => this.checkPasses(e)}
              />
            </div>
            <div
              className={`error-message ${errorMessage} error mb-2 float-left`}
            >
              * Your passwords do not match!
            </div>
            <div className="forgotAndRemember inputBox d-inline-block">
              <div className="custom-control custom-control-register custom-checkbox float-left">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="cb1"
                />
                <label className="custom-control-label">Remember me</label>
              </div>
              <div className="form-button registerBut float-right">
                <button
                  className="buttonSubmit w-100"
                  onClick={(e) => this.handleSubmit(e)}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
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
            <span className="normal pl-2">Sign up with Google</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
