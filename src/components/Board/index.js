import React, { Component } from 'react';
import Cell from '../Cell'
import nought from './img/o.png'
import cross from './img/x.png'
import { EMPTY, CROSS, DRAW } from '../../constants';
import './index.css';

class Board extends Component {
    render() {
        const { game, onClick, winningCells, winner } = this.props;
        return (
            <div>
                <div className="Board">
                    {game && game.map((item, index) => <Cell key={index} index={index} mark={item} onClick={onClick} markIt={winningCells.includes(index)} />)}
                    {winner !== undefined && winner !== EMPTY && <div className="overlay">
                        <div className="overoverlay">
                            <span className="winnerText">{winner === DRAW ? 'Draw' : 'Winner'}</span>
                            {winner !== DRAW && <img src={winner === CROSS ? cross : nought} alt='winner' className='winnerIcon' />};
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}

export default Board;