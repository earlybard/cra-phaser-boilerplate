import React, {Component, RefObject} from 'react';
import logo from './logo.svg';
import './App.css';
import {Game} from "./Game/game";

class App extends Component {

  private game = new Game('game')

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id='game'/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
