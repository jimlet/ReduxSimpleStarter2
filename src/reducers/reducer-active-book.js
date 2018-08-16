// state argument is not application state, only the state
// this reducer is responsible for.
// So it's the current state. If this reducer doesn't care
// about the action (i.e., it's not handled in the switch)
// then we just return the same state as came in.
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED': {
      return action.payload;
    }
  }
  
  return state;
}