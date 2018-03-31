import React, { Component } from 'react';
import Timer from './Timer';
import CounterButton from './CounterButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      seconds: 5
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicks: this.state.clicks + 1});
  }

  render() {

    return (
      <div>
        <Timer />
        <CounterButton clicks={this.state.clicks} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
