import React, { Component } from 'react';
import Board from '../Board';
import Score from '../Score';
import Button from '../Button';

import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      game: [],
      moves: [],
      crossActive: true,
      xScore: 0,
      oScore: 0
    }

    this.undo = this.undo.bind(this);
    this.restart = this.restart.bind(this);
    this.makeMove = this.makeMove.bind(this);
  }

  makeMove(index) {
    const { game, moves, crossActive } = this.state;
    if (game[index] !== -1) return;

    moves.push(index);
    game[index] = crossActive ? 1 : 0;
    this.setState({ game, moves, crossActive: !crossActive })
    if (moves.length === game.length) this.checkGameStatus();
  }

  checkGameStatus() {
    console.log("cehck game")
  }

  undo() {    
    const { game, moves, crossActive } = this.state;

    if(moves.length === 0) return;
    game[moves.pop()] = -1;
    this.setState({ game, moves, crossActive: !crossActive })
  }

  restart() {
    let arr = new Array(9);
    for (let i = 0; i < 9; i++) {
      arr[i] = -1;
    }
    this.setState({ game: arr })
  }


  componentWillMount() {
    this.restart();
  }

  render() {
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row', width: '100%' }}>
            <Score text={`X Score: ${this.state.xScore}`} />
            <Score text={`O Score: ${this.state.oScore}`} />
          </div>
          <Board game={this.state.game} onClick={this.makeMove} />
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
            <Button text='Undo' onClick={this.undo} />
            <Button text='Restart' onClick={this.restart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
