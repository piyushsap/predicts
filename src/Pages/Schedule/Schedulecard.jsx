import React from 'react';

function Schedulecard(props) {
    console.log(props);
  return (
    <div className="match-card">
        <div className="date">
            {props.match.date}
        </div>
        <div className="timiing">
            {props.match.matchno} - {props.match.time} 
        </div>
        <div className="title">
            {props.match.team1} VS {props.match.team2}
        </div>
        <div className="match">
            <div className="opponent">
                {props.match.team1}
            </div>
            <div className="opponent">
                {props.match.team2}
            </div>
            <div className="result">
                {props.match.result}
            </div>
        </div>
    </div>
  );
}

export default Schedulecard;