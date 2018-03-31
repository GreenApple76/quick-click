import React, { Component } from 'react';
import Timer from './Timer';
import CounterButton from './CounterButton';

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

  handleClick() {
    if (this.state.timerActive) {
      this.setState({clicks: this.state.clicks + 1});
    }
  }

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
      </div>
    );
  }
}

export default App;
