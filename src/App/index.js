import React, { Component } from 'react';
import Board from '../Board';
import Score from '../Score';
import Button from '../Button';

import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.undo = this.undo.bind(this);
    this.restart = this.restart.bind(this);
  }

  undo () {

  }

  restart () {

  }

  render() {
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row', width: '100%' }}>
            <Score text = 'X score'/>
            <Score text = 'O score'/>
          </div>
          <Board />
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
            <Button text ='Undo' onClick = {this.undo}/>
            <Button text='Restart' onClick = {this.restart}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
