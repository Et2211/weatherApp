import actiontypes from "../actionType"

const initialState = {
  counter: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
   case actiontypes.LOAD_LOCATIONS:
    return {
      ...state,
      counter: state.counter + 1
    }
   default:
    return state
  }
 }