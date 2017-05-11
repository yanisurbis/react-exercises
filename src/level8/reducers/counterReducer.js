import { CONSTANTS } from "../actions/counterActions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case CONSTANTS.COUNTER_INCREMENT:
      return state + 1;

    case CONSTANTS.COUNTER_DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default counterReducer;
