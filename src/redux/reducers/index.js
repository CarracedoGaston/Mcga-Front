import { combineReducers } from 'redux'
import gameType from './gameType'
import home from './home'
import questions from './questions'
import statics from './statics'
import profile from './profile'

export default combineReducers({
    gameType,
    questions,
    statics,
    home,
    profile
})