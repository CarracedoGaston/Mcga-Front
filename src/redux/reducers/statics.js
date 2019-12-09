import { LOAD_QUESTIONS } from "../actions/statics"
import { LOAD_QUESTION_BY_ID } from "../actions/statics"
import { DELETE_QUESTION } from "../actions/statics"

const initialState = {
  isLoading: false,
  error: '',
  questions: null,
  selectedQuestion: null
}

const reducer = (state=initialState, action) => {
  console.log("state", state)
  console.log("action", action)
  switch(action.type) {
    case LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      }
    case LOAD_QUESTION_BY_ID:
      return {
        ...state,
        selectedQuestion: action.payload
      }
      case DELETE_QUESTION:
        return {
          ...state,
          selectedQuestion: null,
          questions: state.questions.filter(item => item._id !=action.payload)
        }  
    default:
      return state
  }
}


export default reducer