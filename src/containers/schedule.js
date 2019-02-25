import React from 'react';
import DailyGames from './dailyGames';

const schedule = (props) => {
  const days = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
  const getGamesByDay = (day) => {
    // Loop through data and pull out this day's games
    const games = props.games.filter(el => {
      return new Date(el.gameDate).getDate() === day ? el : null
    })
    return games
  }
  return props.games ? (
    <div style={{'padding':'15px'}}>
      <h1>Schedule</h1>
      {days.map((day, index) => {
        return <DailyGames 
          key={index}
          day={day}
          games={getGamesByDay(day)}
        />
      })}
    </div>
  ) : 
  <p>Loading</p>
}

export default schedule;