import React, { Component } from 'react';
import Cell from '../Cell'
import './index.css';

class Board extends Component {
    render() {
        const { game, onClick } = this.props;
        return (
            <div className="Board">
                {game.map((item, index) => <Cell key={index} index={index} mark={item} onClick={onClick} />)}
            </div>
        );
    }
}

export default Board;