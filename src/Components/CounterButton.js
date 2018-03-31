import React, { Component } from 'react';

class CounterButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleClick}>Click Here - {this.props.clicks} clicks</button>    
            </div>
        )
    }
}

export default CounterButton;