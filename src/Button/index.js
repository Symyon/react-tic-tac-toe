import React, { Component } from 'react';
import './index.css';

class Button extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <div className="CustomButton" onClick={onClick}>
                {text}
            </div>
        );
    }
}

export default Button;