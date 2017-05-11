export const CONSTANTS = {
  COUNTER_INCREMENT: "COUNTER_INCREMENT",
  COUNTER_DECREMENT: "COUNTER_DECREMENT"
};

export const increment = () => ({
  type: CONSTANTS.COUNTER_INCREMENT
});

export const decrement = () => ({
  type: CONSTANTS.COUNTER_DECREMENT
});
