import actiontypes from "../actionType"

export const fetchCities = (data) => dispatch => {
  dispatch({
   type: actiontypes.LOAD_LOCATIONS,
   payload: data
  })
 }

 export const fetchWeather = (data) => dispatch => {
  dispatch({
   type: actiontypes.LOAD_WEATHER,
   payload: data
  })
 }