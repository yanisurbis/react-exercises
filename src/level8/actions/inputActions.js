export const CONSTANTS = {
  CHANGE_INPUT: "CHANGE_INPUT",
  RESET_INPUT: "RESET_INPUT"
};

export const change = value => ({
  type: CONSTANTS.CHANGE_INPUT,
  value
});

export const reset = () => ({
  type: CONSTANTS.RESET_INPUT
});
