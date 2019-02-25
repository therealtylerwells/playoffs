import React, { Component } from 'react';
import Schedule from './containers/schedule'

class App extends Component {
  state = {
    data: undefined,
    games: undefined,
  }
  componentDidMount() {
    fetch('http://statsapi.mlb.com/api/v1/schedule/postseason/series?sportId=1&season=2018&hydrate=team,broadcasts(all),seriesStatus(useOverride=true),decisions,person,probablePitcher,linescore(matchup)')
      .then(response => response.json())
      .then(json => this.setState({ data: json }))
      .then(() => this.getGames(this.state.data))
      .catch(error => console.log(error))
  }
  getGames = (data) => {
    const games = [];
    for (let key of Object.keys(data.series)) {
      games.push(data.series[key].games)
    }
    this.setState({games: games.flat()})
  }
  render() {
    const { data, games } = this.state;
    return (
      <Schedule 
        className="app"
        data={data}
        games={games}
      />
    );
  }
}

export default App;
