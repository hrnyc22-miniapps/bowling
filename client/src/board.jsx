import React from "react";
import ReactDOM from "react-dom";
import Pin from "./pin.jsx";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: [
        { pinNumber: 1, round: true, target: false },
        { pinNumber: 2, round: true, target: false },
        { pinNumber: 3, round: true, target: false },
        { pinNumber: 4, round: true, target: false },
        { pinNumber: 5, round: true, target: false },
        { pinNumber: 6, round: true, target: false },
        { pinNumber: 7, round: true, target: false },
        { pinNumber: 8, round: true, target: false },
        { pinNumber: 9, round: true, target: false },
        { pinNumber: 10, round: true, target: false }
      ],
      round: "start",
      subRound: null,
      numberOfPinDown: 0
    };

    this.onClickStart = this.onClickStart.bind(this);
    this.updatePin = this.updatePin.bind(this);
    this.continueBowling = this.continueBowling.bind(this);
    this.randomPinSelector = this.randomPinSelector.bind(this);
  }

  componentDidMount() {}

  randomPinSelector() {
    let randomPinIndex = Math.floor(Math.random() * this.state.pins.length);
    let newState = Object.assign({}, this.state);
    newState.pins[randomPinIndex].target = true;
    this.setState({ newState });
  }

  updatePin(e) {
    let newState = Object.assign({}, this.state);
    newState.pins[e.target.id].round = false;
    this.setState({
      newState
    });
  }

  continueBowling() {
    let randomPinIndex = Math.floor(Math.random() * this.state.pins.length);
    let newState = Object.assign({}, this.state);
    if (newState.pins[randomPinIndex].round === true) {
      newState.pins[randomPinIndex].target = true;
      this.setState({ newState });
    } else {
      this.continueBowling();
    }
  }

  onClickStart() {
    if (this.state.round === "start") {
      this.setState({
        round: 1,
        subRound: "first"
      });
    } else if (this.state.round === 10 && this.state.subRound === "second") {
      this.setState({
        round: "start",
        subRound: null
      });
    } else if (this.state.subRound === "first") {
      this.setState({
        subRound: "second"
      });
    } else {
      this.setState({
        round: (this.state.round += 1),
        subRound: "first"
      });
    }
  }

  render() {
    return (
      <div className="bowling">
        <div>
          {this.state.pins.map((pin, i) => {
            return (
              <Pin
                pin={pin}
                updatePin={this.updatePin}
                continueBowling={this.continueBowling}
                key={i}
              />
            );
          })}
        </div>
        <div>
          {/* <Score pins={{round: this.state.round, subRound: this.state.subRound, number: this.state.numberOfPinDown}}/> */}
          <button onClick={this.onClickStart}>{this.state.round}</button>
          <div>you are on : {this.state.subRound}</div>
        </div>
      </div>
    );
  }
}

// export default Board;
ReactDOM.render(<Board />, document.getElementById("app"));
