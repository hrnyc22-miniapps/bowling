import React from "react";

let inTime = true;

class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    console.log();
    setTimeout(() => {
      inTime = false;
    }, 5);
  }

  onClick(e) {
    if (inTime) this.props.continueBowling(e);
  }

  render() {
    <div className="pin-container" id={this.props.pinNumber}>
      {this.props.round && this.props.target ? (
        <div className="pin-target" onClick={this.onClick} />
      ) : (
        <div className="pin" onClick={this.onClick} />
      )}
    </div>;
  }
}

export default Pin;
