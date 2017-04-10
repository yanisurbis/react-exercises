import React, { Component } from 'react';

class Counter extends Component {
  state = { counter: 0 }

  increase = () => this.setState(prevState => ({counter: prevState.counter + 1}))
  decrease = () => this.setState(prevState => ({counter: prevState.counter - 1}))

  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default Counter;