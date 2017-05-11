import React from "react";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import Counter from "./components/Counter";
import { increment, decrement } from "./actions/counterActions";
import { change, reset } from "./actions/inputActions";

const mapStateToProps = state => {
  console.log(state);
  return {
    counterValue: state.counter,
    inputValue: state.input
  };
};

const Container = connect(mapStateToProps, {
  increment,
  decrement,
  change,
  reset
})(Counter);

let store = createStore(reducer);

export default () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};
