import React from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";
import Counter from "./components/Counter";
import { increment, decrement } from "./actions/counterActions";
import { change, reset } from "./actions/inputActions";
import { fetchGifs } from "./actions/gifsActions";

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
  reset,
  fetchGifs
})(Counter);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};
