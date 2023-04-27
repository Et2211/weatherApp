import actiontypes from "../actionType"

const initialState = {
  locations: {}
}

export default (state = initialState, action) => {

  switch (action.type) {
   case actiontypes.LOAD_LOCATIONS:
    let locationObject = {}
    if (action.payload) {
      action.payload.forEach(city=>{
        locationObject[city.CityId] = city
      })
    }
    return {
      ...state,
      locations: locationObject
    }
   default:
    return state
  }
 }