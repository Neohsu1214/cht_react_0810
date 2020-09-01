const { BUY_FANTA } = require("./FantaTypes");

const initState = {
  numOfFantas: 20,
};

const fantaReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_FANTA:
      return {
        ...state,
        numOfFantas: state.numOfFantas - 1,
      };
    default:
      return state;
  }
};

export default fantaReducer;
