import React, { Component } from 'react';
import Cell from '../Cell'
import './index.css';

const cellsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class Board extends Component {
    render() {
        return (
            <div className="Board" style={{ display: 'flex', flex: 1, flexWrap: 'wrap', backgroundColor: 'red', width: 400, height: 400, alignSelf: 'center' }}>
                {
                    cellsArray.map(item => <Cell key={item} order={item} />)
                }
            </div>
        );
    }
}

export default Board;