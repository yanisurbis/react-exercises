import React, { Component } from "react";

const Counter = ({ increment, decrement, value }) => {
  return (
    <div>
      <button onClick={increment}>
        INC
      </button>
      <button onClick={decrement}>
        DEC
      </button>
      {value}
    </div>
  );
};

export default Counter;
