import { combineReducers } from 'redux'
import gameType from './gameType'
import questions from './questions'
import profile from './profile'

export default combineReducers({
    gameType,
    questions,
    profile
})