import React, { Component } from 'react';
import './index.css';

class Score extends Component {
    render() {
        const { icon, text, active } = this.props;

        return (
            <div className="Score" style={{ backgroundColor: active ? 'rgb(235, 235, 2)' : 'rgb(131, 131, 1)' }}>
                <img src={icon} alt='icon' className="Icon"/>
                {text}
            </div>
        );
    }
}

export default Score;