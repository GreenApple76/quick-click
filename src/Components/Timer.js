import React, { Component } from 'react';

class Timer extends Component {

  render() {
    return (
      <div className="timer-container">
        {this.props.seconds} seconds remaining
      </div>
    )
  }
}
export default Timer;
