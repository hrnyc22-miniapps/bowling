import React from "react";
import ReactDOM from "react-dom";
import Pin from "./pin.jsx";
import Scoreboard from "./scoreboard.jsx"

const board = [
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
];

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
    let leftPin = [];
    for (let i = 0; i < this.state.pins.length; i++) {
      if (
        this.state.pins[i].round === true &&
        this.state.pins[i].target === false
      ) {
        leftPin.push(this.state.pins[i]);
      }
    }
    if (leftPin.length === 0) {
      return;
    }
    let randomPinIndex = Math.floor(Math.random() * leftPin.length);
    let selectedPinNumber = leftPin[randomPinIndex].pinNumber;
    let newState = Object.assign({}, this.state);
    newState.pins[selectedPinNumber - 1].target = true;
    this.setState({ newState });
  }

  onClickStart() {
    if (this.state.round === "start") {
      this.setState(
        {
          round: 1,
          subRound: 1
        },
        () => this.continueBowling()
      );
    } else if (this.state.round === 10 && this.state.subRound === 2) {
      this.setState({
        pins: board,
        round: "start",
        subRound: null
      });
    } else if (this.state.subRound === 1) {
      this.setState(
        {
          subRound: 2
        },
        () => this.continueBowling()
      );
    } else {
      this.setState(
        {
          round: (this.state.round += 1),
          subRound: 1,
          pins: board
        },
        () => this.continueBowling()
      );
    }
  }

  render() {
    return (
      <div className="bowling">
        <div className="board">
            <div>
              <Pin
                pin={this.state.pins[0]}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
                subRound={this.state.subRound}
              />
               <Pin
                pin={this.state.pins[1]}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
                subRound={this.state.subRound}
              />
               <Pin
                pin={this.state.pins[2]}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
                subRound={this.state.subRound}
              />
               <Pin
                pin={this.state.pins[3]}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
                subRound={this.state.subRound}
              />
              </div>
              <div>
               <Pin
                pin={this.state.pins[4]}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
                subRound={this.state.subRound}
              />
               <Pin
                pin={this.state.pins[5]}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
                subRound={this.state.subRound}
              />
               <Pin
                pin={this.state.pins[6]}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
                subRound={this.state.subRound}
              />
              </div>
              <div>
               <Pin
                pin={this.state.pins[7]}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
                subRound={this.state.subRound}
              />
               <Pin
                pin={this.state.pins[8]}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
                subRound={this.state.subRound}
              />
              </div>
              <div>
               <Pin
                pin={this.state.pins[9]}
                continueBowling={this.continueBowling}
                updatePin={this.updatePin}
                subRound={this.state.subRound}
              />
              </div>
        </div>
        <div className="start">
          {/* <Score updateRoundRecords={{round: this.state.round, subRound: this.state.subRound, board: this.state.pins}}/> */}
          <button onClick={this.onClickStart}>{this.state.round}</button>
          <div>
            {this.state.subRound ? "you are on: " + this.state.subRound : null}
          </div>
        </div>
        <div className="score">
          <Scoreboard />
        </div>
      </div>
    );
  }
}

// export default Board;
ReactDOM.render(<Board />, document.getElementById("app"));
