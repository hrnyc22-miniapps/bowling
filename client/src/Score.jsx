import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Score = () => {
  const [totalPin, updateTotalPins] = useState(0);
  const [roundRecords, setRoundRecords] = useState(
    [{round: 1, sub_round: 1, pins: 10}, {round: 1, sub_round: 2, pins: 4}, 
     {round: 2, sub_round: 1, pins: 10}, {round: 2, sub_round: 2, pins: 4},
     {round: 3, sub_round: 1, pins: 10}, {round: 3, sub_round: 2, pins: 4},
     {round: 4, sub_round: 1, pins: 10}, {round: 4, sub_round: 2, pins: 4},
     {round: 5, sub_round: 1, pins: 10}, {round: 5, sub_round: 2, pins: 4},
     {round: 6, sub_round: 1, pins: 10}, {round: 6, sub_round: 2, pins: 4}, 
     {round: 7, sub_round: 1, pins: 10}, {round: 7, sub_round: 2, pins: 4},
     {round: 8, sub_round: 1, pins: 10}, {round: 8, sub_round: 2, pins: 4},
     {round: 9, sub_round: 1, pins: 10}, {round: 9, sub_round: 2, pins: 4},
     {round: 10, sub_round: 1, pins: 10}, {round: 10, sub_round: 2, pins: 4}]
    )
  const [trackStrike, setTrackStrike] = useState(true);
  const [trackSpare, setTrackSpare] = useState(false);

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
      {roundRecords.map((obj, i) => {
        //  <div key={i} className="scoreTable-elements">{obj.pins}</div>
      if (obj.sub_round === 1 && obj.pins === 10) {
        return (<div key={i} className="scoreTable-elements">X</div>);
      } else if (obj.sub_round === 2 && trackStrike) {
        return (<div key={i} className="scoreTable-elements"></div>)
      } else {
        return (<div key={i} className="scoreTable-elements">{obj.pins}</div>)
      }
      })}
    </div>
    
    // <div>Hello World</div>
  )
}

ReactDOM.render(<Score />, document.getElementById('app'));
