import actiontypes from "../actionType"

export const fetchWeather = (data) => dispatch => {
  console.log(data)
  dispatch({
   type: actiontypes.LOAD_LOCATIONS,
   payload: data
  })
 }