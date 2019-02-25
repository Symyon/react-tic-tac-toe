import React, { Component } from 'react';
import './index.css';

class Button extends Component {
    render() {
        const { text, onClick } = this.props;
        return (
            <div className="CustomButton"
                style={{ backgroundColor: onClick ? 'rgb(157, 167, 111)' : 'rgb(110, 118, 76)', cursor: onClick ? 'pointer' : 'default' }}
                onClick={onClick} >
                {text}
            </div>
        );
    }
}

export default Button;