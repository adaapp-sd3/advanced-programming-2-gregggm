import React, { Component } from 'react';
import FarmManager from './components/FarmManager';
import './App.css';
import GameDrawer from './view/GameDrawer';
import GameState from './models/GameState';

// const useGameState = () => {
//   const game = new GameState();
//   const [state, setState] = useState(game);
//   const update = useCallback(() => {
//     setState(game);
//   }, [game]);
//   useEffect(() => {
//     new GameDrawer(game, update);
//   }, [game, update]);
//   return state;
// };

class App extends Component {
	state = {
		game: null
	}

  componentDidMount() {
    const game = new GameState();
    const updateDashboard = () => this.setState({game});
    new GameDrawer(game, updateDashboard);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            <img src="/img/farmer.png" className="App-logo" alt="logo" />{' '}
            Dashboard
          </h2>
        </header>
        {this.state.game && <FarmManager game={this.state.game} />}
      </div>
    );
  }
}

export default App;
