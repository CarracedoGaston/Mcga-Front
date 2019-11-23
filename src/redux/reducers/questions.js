import { ADD_QUESTION, LOAD_QUESTIONS } from "../actions/questions"

const initialState = {
  isLoading: false,
  error: '',
  list: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case LOAD_QUESTIONS:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}

export default reducer