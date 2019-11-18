import { ADD_POSITION } from "../actions/home"

const initialState = {
  isLoading: false,
  error: '',
  position: 0 
}

const reducer = (state=initialState, action) => {
  switch(action.type) {  
    case ADD_POSITION:
      return{
        ...state,
        position: state.position + 1
      }     
    default:
      return state
  }
}

export default reducer