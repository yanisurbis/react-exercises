import { CONSTANTS } from "../actions/inputActions";

const inputReducer = (state = "", action) => {
  switch (action.type) {
    case CONSTANTS.CHANGE_INPUT:
      return action.value;

    case CONSTANTS.RESET_INPUT:
      return "";

    default:
      return state;
  }
};

export default inputReducer;
