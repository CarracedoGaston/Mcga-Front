import { ADD_USER } from "../actions/users"

const initialState = {
  isLoading: false,
  error: '',
  list: [ 
    {name: 'La china',email: 'mejorprofe@gmail.com'},
    {name: 'juan',email: 'juancho@gmail.com'},
    {name: 'mariana',email: 'mariana@gmail.com'},        
  ]
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_USER:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}

export default reducer