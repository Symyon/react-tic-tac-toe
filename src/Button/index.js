import React, { Component } from 'react';
import './index.css';

class Button extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <button
                onClick={onClick}
                style={{ backgroundColor: 'cyan', width: '100%', padding: 10 }}>
                {text}
            </button>
        );
    }
}

export default Button;