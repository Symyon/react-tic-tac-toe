import React, { Component } from 'react';
import './index.css';

class Score extends Component {
    render() {
        const {text} = this.props;

        return (
            <div className="Score">
                {text}
            </div>
        );
    }
}

export default Score;