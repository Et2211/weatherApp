import actiontypes from "../actionType"

const initialState = {
  weather: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
   case actiontypes.LOAD_WEATHER:
    return {
      ...state,
      weather: action.payload
    }
   default:
    return state
  }
 }