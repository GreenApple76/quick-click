import React, { Component } from 'react';

class CounterButton extends Component {
    render() {
        return (
            <div className="btn-container"> 
                {(this.props.seconds > 0) ? <button className="btn-counter" onClick={this.props.handleClick}>Click Here - {this.props.clicks} clicks</button> : <button className="btn-reset" onClick={this.props.reset}>Reset</button>}    
            </div>
        )
    }
}

export default CounterButton;