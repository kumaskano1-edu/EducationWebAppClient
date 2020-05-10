import React, { Component } from "react";

class IntroBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      closed: false,
    };
  }
  toggleClose = () => {
    this.setState({ closed: true });
  };

  render() {
    const closed = this.state.closed ? "d-none" : "";
    return (
      <div
        className={`IntroBoxInner primaryTheme whiteFont p-4 mb-2 ${closed}`}
      >
        <div className="Greetings modern titleFont">
          <div className=" text float-left">Hello {this.state.name}</div>
          <div className="float-right">
            <i class="closingIcon fas fa-times" onClick={this.toggleClose}></i>
          </div>
        </div>
        <div className="IntroText modern ">
          <h1>Welcome to GoStudy</h1>
        </div>
        <div className="content moder titleFont">
          Lorem Impusm dolor ip samet
        </div>
      </div>
    );
  }
}

export default IntroBox;
