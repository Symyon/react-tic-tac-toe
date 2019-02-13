import React, { Component } from 'react';
import Cell from '../Cell'
import './index.css';

class Board extends Component {
    render() {
        const { game, onClick } = this.props;
        return (
            <div className="Board" style={{ display: 'flex', flex: 1, justifyContent: 'space-between', flexWrap: 'wrap', backgroundColor: 'red', width: 400, height: 400, alignSelf: 'center' }}>
                {game.map((item, index) => <Cell key={index} index={index} mark={item} onClick={onClick} />)}
            </div>
        );
    }
}

export default Board;