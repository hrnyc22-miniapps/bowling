import React from "react";

let inTime = true;

class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log("setting the timeout");
    setTimeout(() => {
      console.log("setting time");
      inTime = false;
    }, 5000);
  }

  onClick(e) {
    console.log("you clicked this pin ", e.target.id);
    if (inTime) {
      this.props.continueBowling(e);
      this.props.updatePin(e);
    }
  }

  render() {
    return (
      <div className="pin-container">
        {this.props.pin.round &&
          (this.props.pin.target ? (
            <div
              className="pin-target"
              id={this.props.pin.pinNumber}
              onClick={e => {
                this.onClick(e);
              }}
            />
          ) : (
            <div
              className="pin"
              id={this.props.pin.pinNumber}
              onClick={e => {
                this.onClick(e);
              }}
            />
          ))}
      </div>
    );
  }
}

export default Pin;
