import React, { Component } from 'react';
import './index.css';

class Score extends Component {
    render() {
        const {text} = this.props;

        return (
            <div style={{backgroundColor: 'yellow',  width: '100%', padding: 10}}>
                {text}
            </div>
        );
    }
}

export default Score;