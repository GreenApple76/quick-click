import React, { Component } from 'react';

class CounterButton extends Component {
    render() {
        return (
            <div>
                {(this.props.seconds > 0) ? <button onClick={this.props.handleClick}>Click Here - {this.props.clicks} clicks</button> : <button style={{marginTop: "20px"}} onClick={this.props.reset}>Reset</button>}    
            </div>
        )
    }
}

export default CounterButton;