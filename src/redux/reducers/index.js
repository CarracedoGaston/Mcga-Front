import { combineReducers } from 'redux'
import home from './home'
import questions from './questions'
import users from './users'

export default combineReducers({
  questions,
  home,
  users
})