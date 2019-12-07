import { LOAD_QUESTION_BY_ID } from "../actions/statics"

const initialState = {
  isLoading: false,
  error: '',
  selectedQuestion: {}
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case LOAD_QUESTION_BY_ID:
      return {
        ...state,
        selectedQuestion: action.payload
      }
    default:
      return state
  }
}

export default reducer