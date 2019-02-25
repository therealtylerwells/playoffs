import React from 'react';
import Teams from '../components/teams';
import GameStatus from '../components/gameStatus';
import Links from '../components/links';

const styles = {
  gameContainer: {
    'display': 'flex',
    'flexDirection': 'row',
    'padding': '10px 0 10px 0',
    'borderBottom': '.5px solid lightgray',
  },
}

const game = (props) =>{
  const game = props.children;
  const broadcastTime = new Date(game.gameDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  let broadcast = game.broadcasts.filter(el => {
    return el.type === "TV" && (el.name === "ESPN" || el.name === "FOX" || el.name ==="TBS" || el.name === "FS1" || el.name === "MLBN") ? el : null;
  })
  return (
    <React.Fragment>
    <span style={{'fontSize':'8px', 'fontWeight':'bold', 'color':'gray'}}>{game.description}</span><br/>
    <div style={styles.gameContainer}>
      <Teams 
        style={styles.teams}
        awayTeam={game.teams.away.team.teamName}
        homeTeam={game.teams.home.team.teamName}
      />
      <GameStatus
        style={styles.gameStatus}
        gameTime={broadcastTime}
        broadcast={broadcast[0].name}
        awayAbbreviation={game.teams.away.team.abbreviation}
        homeAbbreviation={game.teams.home.team.abbreviation}
        awayPitcher={game.teams.away.probablePitcher.initLastName}
        homePitcher={game.teams.home.probablePitcher.initLastName}
      />
      <div style={{'flex':'2'}}></div>
      <Links style={styles.links}/>
  </div>
  </React.Fragment>
  )
}

export default game;