import React from 'react';
import Game from './game';

const styles = {
  date: {
    'fontSize': '20px',
    'fontWeight': 'bold',
  },
  dateContainer: {
    'padding': '10px 0 5px 0',
    'borderBottom': '1px solid lightGray',
  }
}

const dailyGames = (props) => {
  const dayOfWeek = {
    '0': 'Sunday',
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
  }
  const getDate = (day) => {
    let thisDate = new Date(`10/${day}/2018`)
    let displayDate = dayOfWeek[thisDate.getDay()] + ', October ' + day
    return displayDate
  }
  // Render this component only if we have games on this day
  return props.games.length > 0 ? (
    <React.Fragment>
      <div style={styles.dateContainer}>
      <span style={styles.date}>{getDate(props.day)}</span><br/>
      </div>
      {props.games.map((game, index) => {
        return <Game key={index}>{game}</Game>
      })}
    </React.Fragment>
  ) 
  : 
  null
}

export default dailyGames;