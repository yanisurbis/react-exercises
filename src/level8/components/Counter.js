import React, { Component } from "react";

class Counter extends Component {
  onChangeInput = evt => {
    const { change } = this.props;
    change(evt.target.value);
  };
  render() {
    console.log(this.props);
    const {
      increment,
      decrement,
      inputValue,
      counterValue,
      change
    } = this.props;
    return (
      <div>
        <input onChange={this.onChangeInput} value={inputValue} />
        <h1>{inputValue}</h1>
        <button onClick={increment}>
          INC
        </button>
        <button onClick={decrement}>
          DEC
        </button>
        {counterValue}
      </div>
    );
  }
}

export default Counter;
