const initialState = {
  counter: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
   case 'SIMPLE_ACTION':
    return {
      ...state,
      counter: state.counter + 1
    }
   default:
    return state
  }
 }