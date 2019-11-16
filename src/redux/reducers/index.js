import { combineReducers } from 'redux'
import gameType from './gameType'
import home from './home'
import login from './login'
import questions from './questions'
import statics from './statics'
import users from './users'

export default combineReducers({
    gameType,
    login, 
    questions,
    statics,
    home,
    users
})