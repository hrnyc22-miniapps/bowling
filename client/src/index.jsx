import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
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
      subRound: null
    };
    this.onClickStart = this.onClickStart.bind(this);
  }

  componentDidMount() {
    // this.randomPinSelector();
  }

  randomPinSelector() {
    let randomPinIndex = Math.floor(Math.random() * this.state.pins.length);
    let newState = Object.assign({}, this.state);
    newState.pins[randomPinIndex].target = true;

    this.setState({ newState });
  }

  onClickStart() {
    if (this.state.round === "start") {
      this.setState({
        round: 1,
        subRound: "first"
      })
    } else if (this.state.round === 10 && this.state.subRound === "second") {
      this.setState({
        round: "start",
        subRound: null
      })
    } else if (this.state.subRound === "first") {
      this.setState({
        subRound: "second"
      })
    } else {
      this.setState({
        round: this.state.round += 1,
        subRound: "first"
      })
    } 
  }

  render() {
    return (
      <div className="bowling">
        <div>{this.state.pins.map((pin, i) => {})}</div>
        <div>
          <button onClick={this.onClickStart}>{this.state.round}</button>
          <div>you are on : {this.state.subRound}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
