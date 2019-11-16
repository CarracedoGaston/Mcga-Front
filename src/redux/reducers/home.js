const initialState = {
  isLoading: false,
  error: '',
  data: {
    user: 1, 
    gameType: 1, 
    title:'What food do you prefer?',
    firstAnswer: 'meat',
    secondAnswer: 'pasta',
    thirdAnswer: 'pizza',
    firstQuantity: 10,
    secondQuantity: 50,
    thirdQuantity: 120
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type) {  
    default:
      return state
  }
}

export default reducer