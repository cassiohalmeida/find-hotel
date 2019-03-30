import { combineReducers } from 'redux'
import hotels from './hotels'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  hotels,
  visibilityFilter
})
