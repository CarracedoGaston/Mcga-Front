import { combineReducers } from 'redux'
import home from './home'
import questions from './questions'
import statics from './statics'
import users from './users'

export default combineReducers({
  questions,
  statics,
  home,
  users
})