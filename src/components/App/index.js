import React, { Component } from 'react';
import Board from '../Board';
import Score from '../Score';
import Button from '../Button';
import nought from './img/o.png';
import cross from './img/x.png';
import { EMPTY, NOUGHT, CROSS, DRAW } from '../../constants';

import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      game: [],
      moves: [],
      crossActive: true,
      xScore: 0,
      oScore: 0,
      winner: EMPTY,
      winningCells: ''
    }

    this.undo = this.undo.bind(this);
    this.restart = this.restart.bind(this);
    this.makeMove = this.makeMove.bind(this);
  }

  makeMove(index) {
    const { game, moves, crossActive, winner } = this.state;
    if (winner !== EMPTY || game[index] !== EMPTY) return;

    moves.push(index);
    game[index] = crossActive ? CROSS : NOUGHT;
    this.setState({ game, moves, crossActive: !crossActive })
    if (moves.length >= 3) this.checkGameStatus();
  }

  checkGameStatus() {
    const { game, moves } = this.state;

    let winningCells;
    //check rows   
    for (let i = 0; i < 3; i++) {
      const matchMe = game[i * 3];
      winningCells = '';
      let j;
      for (j = 0; j < 3; j++) {
        const index = i * 3 + j;
        if (game[index] === EMPTY || game[index] !== matchMe) break;
        winningCells += index;
      }
      if (j === 3) { this.markWinner(matchMe, winningCells); return; }
    }

    //check columns
    for (let i = 0; i < 3; i++) {
      const matchMe = game[i];
      winningCells = '';
      let j;
      for (j = 0; j < 3; j++) {
        const index = i + j * 3;
        if (game[index] === EMPTY || game[index] !== matchMe) break;
        winningCells += index;
      }
      if (j === 3) { this.markWinner(matchMe, winningCells); return; }
    }

    //check diagonals
    for (let i = 0; i < 3; i += 2) {
      const matchMe = game[i * 3];
      winningCells = '';
      let j;
      for (j = 0; j < 3; j++) {
        const index = Math.abs(i - j) * 3 + j;
        if (game[index] === EMPTY || game[index] !== matchMe) break;
        winningCells += index;
      }
      if (j === 3) { this.markWinner(matchMe, winningCells); return; }
    }

    if (moves.length === 9) this.markWinner(DRAW, '');
  }

  markWinner(matchMe, winningCells) {
    let { xScore, oScore } = this.state;
    if (matchMe === CROSS) xScore++;
    else if (matchMe === NOUGHT) oScore++;

    this.setState({ winner: matchMe, xScore, oScore, winningCells })
  }

  undo() {
    const { game, moves, crossActive } = this.state;

    game[moves.pop()] = EMPTY;
    this.setState({ game, moves, crossActive: !crossActive })
  }

  restart() {
    let arr = new Array(9);
    for (let i = 0; i < 9; i++) {
      arr[i] = EMPTY;
    }

    this.setState({ game: arr, moves: [], crossActive: true, winner: EMPTY, winningCells: '' })
  }


  componentWillMount() {
    this.restart();
  }

  render() {

    const { moves, winner } = this.state;
    const isUndo = moves.length !== 0 && moves.length !== 9 && winner === EMPTY;

    return (
      <div className="App">
        <div>
          <div className="ScoreContainer">
            <Score icon={cross} value={this.state.xScore} active={this.state.crossActive} />
            <Score icon={nought} value={this.state.oScore} active={!this.state.crossActive} />
          </div>
          <Board game={this.state.game} onClick={this.makeMove} winningCells={this.state.winningCells} winner={this.state.winner} />
          <div className="ButtonsContainer">
            <Button text='Undo' onClick={isUndo ? this.undo : null} />
            <Button text='Restart' onClick={this.restart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
