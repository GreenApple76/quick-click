import React, { Component } from 'react';
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
  }

  // increments click counter when button is clicked
  handleClick() {
    if (this.state.timerActive) {
      this.setState({clicks: this.state.clicks + 1});
    }
  }

  // toggle timer status from active / inactive
  handleTimerStatus() {
    this.setState((prevState) => {
      return {timerActive: !this.state.timerActive}
    });
  }
  render() {

    return (
      <div>
        <Timer timerActive={this.state.timerActive} handleTimerStatus={this.handleTimerStatus} />
        <CounterButton clicks={this.state.clicks} handleClick={this.handleClick} />
        <ReportClicks clicks={this.state.clicks} timerActive={this.state.timerActive} />
      </div>
    );
  }
}

export default App;
