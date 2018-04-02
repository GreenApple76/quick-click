import React, { Component } from 'react';

class Timer extends Component {

  render() {
    return (
      <div>
        {this.props.seconds} seconds remaining
      </div>
    )
  }
}
export default Timer;
