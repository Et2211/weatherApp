import actiontypes from "../actionType"

export const fetchWeather = () => dispatch => {
  dispatch({
   type: actiontypes.LOAD_LOCATIONS,
   payload: 'result_of_simple_action'
  })
 }