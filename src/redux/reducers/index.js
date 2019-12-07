import { combineReducers } from 'redux'
import home from './home'
import questions from './questions'
import users from './users'
import statics from './statics'

export default combineReducers({
  questions,
  home,
  users,
  statics
})