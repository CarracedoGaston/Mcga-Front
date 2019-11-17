import { ADD_QUESTION } from "../actions/questions"

const initialState = {
  isLoading: false,
  error: '',
  list: [
    {
      id: Math.random(), 
      user: 1,  
      gameType: 1, 
      title:'What is your favorite sport',
      firstAnswer: 'tennis',
      secondAnswer: 'volleyball',
      thirdAnswer: 'basketball',
      firstQuantity: 0,
      secondQuantity: 0,
      thirdQuantity: 0
    },
    {
      id: Math.random(), 
      user: 1,  
      gameType: 1, 
      title:'What is your favorite food',
      firstAnswer: 'pizza',
      secondAnswer: 'pasta',
      thirdAnswer: 'meat',
      firstQuantity: 1,
      secondQuantity: 0,
      thirdQuantity: 3
    }
  ]
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
      default:
        return state
  }
}

export default reducer