import { LOAD_QUESTIONS } from "../actions/statics"
import { LOAD_QUESTION_BY_ID } from "../actions/statics"
import { DELETE_QUESTION } from "../actions/statics"
import { UPDATE_QUESTION } from "../actions/statics"

const initialState = {
  isLoading: false,
  error: '',
  questions: [],
  selectedQuestion: null
}

const reducer = (state=initialState, action) => {
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
          questions: state.questions.filter(question => question._id !==action.payload)
        }  
        case UPDATE_QUESTION:
          return {
            ...state,
            selectedQuestion: null,
            questions: state.questions.map((question)=> 
            question._id==action.payload._id ? 
              action.payload : question)
          }  
    default:
      return state
  }
}


export default reducer