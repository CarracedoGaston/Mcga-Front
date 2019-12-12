import { IS_AUTH } from "../actions/users"

const initialState = {
  isLoading: false,
  error: '',
  user: {}, 
  isAuth: false
}

const reducer = (state=initialState, action) => {
  switch(action.type) { 
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.payload
    }
    default:
      return state
  }
}

export default reducer