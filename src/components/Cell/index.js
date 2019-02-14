import React, { Component } from 'react';
import nought from './img/o.png';
import cross from './img/x.png';
import { NOUGHT, EMPTY } from '../../constants';
import './index.css';

class Cell extends Component {
    render() {

        const { mark, onClick, index } = this.props;
        return (
            <div className="Cell"
                onClick={() => onClick(index)}>
                {mark !== EMPTY && (mark === NOUGHT ?
                    <img src={nought} alt={"O"} style={{ width: '100%', height: '100%' }} /> :
                    <img src={cross} alt={"X"} style={{ width: '100%', height: '100%' }} />)}
            </div>
        );
    }
}

export default Cell;