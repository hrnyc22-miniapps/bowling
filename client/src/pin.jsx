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
    console.log(e.target.id);
    this.props.
    if (inTime) {
      this.props.continueBowling(e)
    }else {
      this.props.endRound()
    };
  }

  render() {
    return (
      <div className="pin-container" id={this.props.pin.pinNumber}>
        {this.props.pin.round && this.props.pin.target ? (
          <div className="pin-target" onClick={this.onClick} />
        ) : (
          <div className="pin" onClick={this.onClick} />
        )}
      </div>
    );
  }
}

export default Pin;
