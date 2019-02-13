import React, { Component } from 'react';
import Board from '../Board';
import Score from '../Score';
import Button from '../Button';

import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      moves: [],
      crossActive: true
    }

    this.undo = this.undo.bind(this);
    this.restart = this.restart.bind(this);
    this.makeMove = this.makeMove.bind(this);
  }

  makeMove(index) {
    const { moves, crossActive } = this.state;
    if (moves[index] !== -1) return;

    moves[index] = crossActive ? 1 : 0;
    this.setState({ moves, crossActive: !crossActive })
    this.checkGameStatus();
  }

  checkGameStatus() {

  }

  undo() {

  }

  restart() {
    let arr = new Array(9);
    for (let i = 0; i < 9; i++) {
      arr[i] = -1;
    }
    this.setState({ moves: arr })
  }


  componentWillMount() {
    this.restart();
  }

  render() {
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row', width: '100%' }}>
            <Score text='X score' />
            <Score text='O score' />
          </div>
          <Board moves={this.state.moves} onClick={this.makeMove} />
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
