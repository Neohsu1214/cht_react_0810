const { BUY_COKE } = require("./CokeTypes")

const initState = {
    numOfCokes: 10
}

const cokeReducer = (state = initState, action) => {
    switch(action.type) {
        case BUY_COKE:
            return {
                ...state,
                numOfCokes: state.numOfCokes - 1
            }
        default:
            return state
    }
}

export default cokeReducer