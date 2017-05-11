import React from "react";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import Counter from "./components/Counter";
import * as actions from "./actions";

const initialState = 0;

const ContainerCounter = connect(
  state => ({
    value: state
  }),
  actions
)(Counter);

let store = createStore(reducer, initialState);

export default () => {
  return (
    <Provider store={store}>
      <ContainerCounter />
    </Provider>
  );
};
