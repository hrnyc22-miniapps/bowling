import React from "react";

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

  }

  countPinDown() {
    
  }

  render() {
    return (
      <div>
        <table align="center">
          <tbody>
            <tr>
              <td colSpan="2">Round 1</td>
              <td colSpan="2">Round 2</td>
              <td colSpan="2">Round 3</td>
              <td colSpan="2">Round 4</td>
              <td colSpan="2">Round 5</td>
              <td colSpan="2">Round 6</td>
              <td colSpan="2">Round 7</td>
              <td colSpan="2">Round 8</td>
              <td colSpan="2">Round 9</td>
              <td colSpan="2">Round 10</td>
              <td>Total</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Scoreboard;
