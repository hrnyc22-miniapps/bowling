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
  }

  componentDidMount() {}

  updatePin(e, inTime) {
    if (inTime) {
      let newState = Object.assign({}, this.state);
      newState.pins[e.target.id - 1].round = false;
      this.setState({
        newState
      });
    } else {
      let newState = Object.assign({}, this.state);
      newState.pins[e.target.id - 1].target = false;
      this.setState({
        newState
      });
    }
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
      this.setState(
        {
          round: 1,
          subRound: "first"
        },
        () => this.continueBowling()
      );
    } else if (this.state.round === 10 && this.state.subRound === "second") {
      this.setState({
        pin: [
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
        subRound: null
      });
    } else if (this.state.subRound === "first") {
      this.setState(
        {
          subRound: "second"
        },
        () => this.continueBowling()
      );
    } else {
      this.setState(
        {
          round: (this.state.round += 1),
          subRound: "first",
          pin: [
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
          ]
        },
        () => {
          this.continueBowling();
        }
      );
    }
  }

  render() {
    return (
      <div className="bowling">
        <div>
          {this.state.pins.map((pin, i) => {
            return (
              <Pin
                key={i}
                pin={pin}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
              />
            );
          })}
        </div>
        <div>
          {/* <Score pins={{round: this.state.round, subRound: this.state.subRound, numberOfPinDown: this.state.numberOfPinDown}}/> */}
          <button onClick={this.onClickStart}>{this.state.round}</button>
          <div>you are on : {this.state.subRound}</div>
        </div>
      </div>
    );
  }
}

// export default Board;
ReactDOM.render(<Board />, document.getElementById("app"));
