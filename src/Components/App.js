import React, { Component } from 'react';
import Header from './Header';
import Timer from './Timer';
import CounterButton from './CounterButton';
import ReportClicks from './ReportClicks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      timerActive: false,
      seconds: 5
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTimerStatus = this.handleTimerStatus.bind(this);
    this.reset = this.reset.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

    // countdown timer in seconds
    startTimer() {
      let intervalID = setInterval(() => { this.setState((prevState) => { 
        // stop setInterval if timer has expired
        if (prevState.seconds === 0) {
          clearInterval(intervalID);
          // set timerActive to false
          this.handleTimerStatus();
        } else if (this.state.timerActive) {
          return { seconds: prevState.seconds - 1 };
        }
      });
    }, 1000);
    }

  // increments click counter when button is clicked
  handleClick() {
    if (this.state.timerActive) {
      this.setState({clicks: this.state.clicks + 1});
    } else { 
      this.setState({clicks: this.state.clicks + 1});
      this.handleTimerStatus(); // toggle timer status to active
      this.startTimer();
    }
  }

  // toggle timer status from active / inactive
  handleTimerStatus() {
    this.setState((prevState) => {
      return {timerActive: !this.state.timerActive}
    });
  }

  reset() {
    this.setState(() => {
      return {clicks: 0, timerActive: false, seconds: 5};
    }, this.startTimer);
  }

  render() {
    const title = "Quick Click Challenge";
    const subtitle = "How many clicks can you click in 5 seconds?";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Timer seconds={this.state.seconds} />
        <CounterButton seconds={this.state.seconds} clicks={this.state.clicks} handleClick={this.handleClick} timerActive={this.state.timerActive} reset={this.reset} />
        <ReportClicks seconds={this.state.seconds} clicks={this.state.clicks} />
      </div>
    );
  }
}

export default App;
