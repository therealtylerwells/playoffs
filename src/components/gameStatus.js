import React from 'react';

const gameStatus = (props) => (
  <div style={{'flex':'4'}}>
    <div style={{'display':'flex'}}>
      <div style={{'flex':'1'}}>
        <div style={{'display':'flex'}}>
        <span style={{'flex':'1'}}>{props.gameTime}</span>
        <span style={{'flex':'1'}}><strong>{props.broadcast}</strong></span>
        </div>
      </div>
      <div style={{'flex':'1'}}>
      <span style={{'color':'gray'}}>{props.awayAbbreviation}:  </span>
      <span style={{'color':'blue'}}>{props.awayPitcher}</span>
      </div>
      <div style={{'flex':'1'}}>
      <span style={{'color':'gray'}}>{props.homeAbbreviation}:  </span>
      <span style={{'color':'blue'}}>{props.homePitcher}</span>
      </div>
    </div>
  </div>
)

export default gameStatus;