import React, { Component } from 'react';
import './index.css';

class Button extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <button
                className="CustomButton"
                onClick={onClick}>
                {text}
            </button>
        );
    }
}

export default Button;