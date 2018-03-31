import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 5
    };
  }

  // countdown timer in seconds
  startTimer() {
    let intervalID = setInterval(() => { this.setState((prevState) => { 
      // stop setInterval if timer has expired
      if (prevState.seconds === 0) {
        clearInterval(intervalID);
      } else {
        return { seconds: prevState.seconds - 1 };
      }
    });
  }, 1000);
  }

  componentDidMount() {
    this.startTimer();
  }

  render() {
    return (
      <div>
        {this.state.seconds} seconds
      </div>
    )
  }
}
export default Timer;
