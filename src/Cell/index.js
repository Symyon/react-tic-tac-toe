import React, { Component } from 'react';
import logo from '../logo.svg';
import './index.css';

class Cell extends Component {
    render() {

        const { order } = this.props;
        return (
            <div className='Cell'
                onClick={() => console.log(order)}
                style={{ display: 'flex', backgroundColor: 'green', maxWidth: '33.33%', maxHeight: '33%', justifyContent: 'center', alignItems: 'center' }}>
                {/* {order} */}
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Cell;