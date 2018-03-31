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
        // set timerActive to false
        this.props.handleTimerStatus();
      } else {
        return { seconds: prevState.seconds - 1 };
      }
    });
  }, 1000);
  }

  componentDidMount() {
    // set timerActive to true to enable counting clicks
    this.props.handleTimerStatus();
    // begin counting down 
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
