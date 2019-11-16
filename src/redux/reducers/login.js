const initialState = {
  isLoading: false,
  error: '',
  data: {
    name: 'La china',
    email: 'mejorprofe@gmail.com'
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type) {    
    default:
      return state
  }
}

export default reducer