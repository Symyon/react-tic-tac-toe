import React, { Component } from 'react';
import './index.css';

class Button extends Component {
    render() {
        const { text, onClick, active } = this.props;
        return (
            <div className="CustomButton"
                style={{ backgroundColor: active ? 'rgb(157, 167, 111)' : 'rgb(110, 118, 76)', cursor: active ? 'pointer' : 'default' }}
                onClick={active ? onClick : null} >
                {text}
            </div>
        );
    }
}

export default Button;