import actiontypes from "../actionType"

const initialState = {
  locations: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
   case actiontypes.LOAD_LOCATIONS:
    return {
      ...state,
      locations: action.payload
    }
   default:
    return state
  }
 }