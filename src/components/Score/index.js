import React, { Component } from 'react';
import './index.css';

class Score extends Component {
    render() {
        const { icon, value, active } = this.props;

        return (
            <div className="Score" style={{ backgroundColor: active ? 'rgb(235, 235, 2)' : 'rgb(131, 131, 1)' }}>
                <img src={icon} alt='icon' className="Icon"/>
                {`Score: ${value ? value : 0}`}
            </div>
        );
    }
}

export default Score;