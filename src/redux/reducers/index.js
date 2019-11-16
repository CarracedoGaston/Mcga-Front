import { combineReducers } from 'redux'
import questions from './questions'
import profile from './profile'

export default combineReducers({
    questions,
    profile
})