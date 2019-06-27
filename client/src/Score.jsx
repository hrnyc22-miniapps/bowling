import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx';

const Score = () => {
  const [totalPin, updateTotalPins] = useState(0);
  const [roundRecords, setRoundRecords] = useState([]);
  const [trackStrike, setTrackStrike] = useState(true);
  const [trackSpare, setTrackSpare] = useState(false);

  let renderTotalPin = (obj) => {
    let output = {};
    output.round = obj.round;
    output.sub_round = obj.sub_round;
    let count = 0;
    for (var i = 0; i < obj.board.length; i++) {
      if (obj.board[i].round === false) {
        count += 1;
      }
    }

    //determine pin count/symbol:
    if (obj.sub_round === 1) { //for the first sub_round
      if (count === 10) { //strike was hit
        output.pins = 10;
        updateTotalPins(totalPin + 10 + count);
      } else {
        output.pins = count;
        updateTotalPins(totalPin + count);
      }
    } else { //second sub_round
      if (count === roundRecords[roundRecords.length-1].pins) { //when there are no new pins hit or a strike was hit
        if (count === 10) { //strike was hit in the sub_round before
          output.pins = 0;
        } else { // no pins were hit
          output.pins = 0;
        }
      } else { //new pins were hit in the second sub_round
        let newPins = count - roundRecords[roundRecords.length-1].pins;
        output.pins = newPins;
       if (count === 10) {
          updateTotalPins(totalPin + 10 + newPins);
        } else { 
          updateTotalPins(totalPin + newPins);
        }
      }
    }
    setRoundRecords([...roundRecords, output]);
  }
return (
    <div>
    <div className="scoreTable">
      <div className="scoreTable-header1">Round 1</div>
      <div className="scoreTable-header2">Round 2</div>
      <div className="scoreTable-header3">Round 3</div>
      <div className="scoreTable-header4">Round 4</div>
      <div className="scoreTable-header5">Round 5</div>
      <div className="scoreTable-header6">Round 6</div>
      <div className="scoreTable-header7">Round 7</div>
      <div className="scoreTable-header8">Round 8</div>
      <div className="scoreTable-header9">Round 9</div>
      <div className="scoreTable-header10">Round 10</div>
      <div className="total">Total</div>
      {roundRecords.map((round, i) => {
        return (<div key={i} className="scoreTable-elements">{round.pins}</div>)
      }
      )}
      <div className="total-element">{totalPin}</div>
    </div>
    <Board  renderTotalPin={renderTotalPin}/>
    </div> )
}


ReactDOM.render(<Score />, document.getElementById('app'));


//   let rendertotalPin = (obj) => {
//     let count = 0;
//     let output = {};
//     for (var i = 0; i < obj.board.length; i++) {
//       if (obj.sub_round === 1 && obj.board[i].round === false) {
//         count += 1;
//       } 
//     }
//     output.round = obj.round;
//     output.sub_round = obj.sub_round;
//     if (roundRecords.length > 0 && obj.sub_round === 1 && count === 10) {//strike
//     setRoundRecords([...roundRecords, {round: obj.round, sub_round: obj.subround, pins: 'X'}])
//     count += 10;
//     } else if (roundRecords.length > 0 && obj.sub_round === 2 && roundRecords[roundRecords.length-1].pins + count === 10 && count !== 0) { //spare
//     setRoundRecords([...roundRecords, {round: obj.round, sub_round: obj.subround, pins: '/'}]);
//     count += 10;
//     } else if (roundRecords.length < 20 && obj.sub_round === 2) {
//     output.pins = count - roundRecords[roundRecords.length-1].pins;
//     setRoundRecords([...roundRecords, output])
//     }
//     updateTotalPins(totalPin + count);
// }
