import React from 'react';

const teams = (props) => {
  return (
    <div style={{'flex':'2'}}>
      <div style={{'display':'flex'}}>
        <div style={{'flex':'1'}}>
          <span><strong>{props.awayTeam}</strong></span>
        </div>
        <span style={{'color':'gray'}}>@</span>
        <div style={{'flex':'1', 'paddingLeft':'10px'}}>
          <span><strong>{props.homeTeam}</strong></span>
        </div>
      </div>
    </div>
  )
}

export default teams;