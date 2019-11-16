const initialState = {
  isLoading: false,
  error: '',
  list: [
    {id: 1, name: 'Sport'},
    {id: 2, name: 'Food'},
    {id: 3, name: 'Movies'}
  ]
}

const reducer = (state=initialState, action) => {
  switch(action.type) {  
    default:
      return state
  }
}

export default reducer