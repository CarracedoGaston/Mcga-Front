import { ADD_USER } from "../actions/users"

const initialState = {
  isLoading: false,
  error: '',
  list: [ ]
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_USER:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}

export default reducer