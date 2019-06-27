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
    } else {
      this.props.endRound();
    }
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="pin-container" id={this.props.pinNumber}>
        {this.props.round && this.props.target ? (
          <div className="pin-target" onClick={this.onClick} />
        ) : (
          <div className="pin" onClick={this.onClick} />
=======
      <div className="pin-container">
        {this.props.pin.round && this.props.pin.target ? (
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
>>>>>>> f99a548d400235ed223dfaf176c577cf3e876347
        )}
      </div>
    );
  }
}

export default Pin;
