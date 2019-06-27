import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Score = () => {
  const [totalPin, updateTotalPins] = useState(0);
  const [roundRecords, setRoundRecords] = useState([{round: 1, sub_round: 1, pins: 10}, {round: 1, sub_round: 2, pins: 0}, {round: 2, sub_round: 1, pins: 1}]);
  const [trackStrike, setTrackStrike] = useState(true);
  const [trackSpare, setTrackSpare] = useState(false);

  let obj1 = {
    board: [{ pinNumber: 1, round: false, target: false },
    { pinNumber: 2, round: false, target: false },
    { pinNumber: 3, round: false, target: false },
    { pinNumber: 4, round: false, target: false },
    { pinNumber: 5, round: false, target: false },
    { pinNumber: 6, round: true, target: false },
    { pinNumber: 7, round: false, target: false },
    { pinNumber: 8, round: false, target: false },
    { pinNumber: 9, round: false, target: false },
    { pinNumber: 10, round: false, target: false }],
    round: 2,
    sub_round: 2,
  }

  let rendertotalPin = (obj) => {
    let count = 0;
    let output = {};
    for (var i = 0; i < obj.board.length; i++) {
      if (obj.board[i].round === false) {
        count += 1;
      }
    }
    output.round = obj.round;
    output.sub_round = obj.sub_round;
    output.pins = count;
    if (roundRecords.length > 0 && obj.sub_round === 1 && count === 10) {//strike
    setRoundRecords([...roundRecords, {round: obj.round, sub_round: obj.subround, pins: 'X'}])
    count += 10;
    } else if (roundRecords.length > 0 && obj.sub_round === 2 && roundRecords[roundRecords.length-1].pins + count === 10 && count !== 0) { //spare
    setRoundRecords([...roundRecords, {round: obj.round, sub_round: obj.subround, pins: '/'}]);
    count += 10;
    } else if (roundRecords.length < 20) {
    setRoundRecords([...roundRecords, output])
    }
    updateTotalPins(totalPin + count);
}
return (
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
      <button onClick={()=>{rendertotalPin(obj1);}}></button>
      {roundRecords.map((round, i) => {
        return (<div key={i} className="scoreTable-elements">{round.pins}</div>)
      }
      )}
      <div className="total-element">{totalPin}</div>
    </div>
  )
}


ReactDOM.render(<Score />, document.getElementById('app'));
