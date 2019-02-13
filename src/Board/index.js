import React, { Component } from 'react';
import Cell from '../Cell'
import './index.css';

class Board extends Component {
    render() {
        const { moves, onClick } = this.props;
        return (
            <div className="Board" style={{ display: 'flex', flex: 1, flexWrap: 'wrap', backgroundColor: 'red', width: 400, height: 400, alignSelf: 'center' }}>
                {moves.map((item, index) => <Cell key={index} index={index} mark={item} onClick={onClick} />)}
            </div>
        );
    }
}

export default Board;