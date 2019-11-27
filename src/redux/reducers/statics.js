import {LOAD_STATICS} from "../actions/statics"

const initialState = {
    isLoading: false,
    error: '',
    list: [
      {id: 1, title: 'Question 1'},
      {id: 2, title: 'Question 2'},
      {id: 3, title: 'Question 3'}
  ]
}

const reducer = (state=initialState, action) => {
    console.log(action, state)
    switch(action.type) {
      case LOAD_STATICS:
        return {
          ...state,
          list: action.payload,
          error: null,
           isLoading: false
      }
      default:
        return state
    }
}

export default reducer