import React, { Component } from "react"
import FarmManager from "./components/FarmManager"
import "./App.css"
import GameDrawer from './view/GameDrawer';
import GameState from './models/GameState';

class App extends Component {

  componentDidMount() {
		const game = new GameState();
		console.log(game)
		const updateDashboard = () => this.setState(game);
		new GameDrawer(game, updateDashboard);
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            <img src="/img/farmer.png" className="App-logo" alt="logo" />{" "}
            Dashboard
          </h2>
        </header>
        {/* <FarmManager farmer={this.state.farmer} farm={this.state.farm} market={this.state.market} /> */}
      </div>
    )
  }
}

export default App
