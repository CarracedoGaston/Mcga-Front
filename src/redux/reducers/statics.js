import {LOAD_STATICS} from "../actions/statics"

const initialState = {
    isLoading: false,
    error: '',
    position: undefined
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
      case LOAD_STATICS:
        return {
        //  ...state,
          position: action.payload.position,
          error: null,
          isLoading: true
      }
      default:
        return state
    }
}

export default reducer