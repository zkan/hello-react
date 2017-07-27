import { combineReducers } from 'redux'
import itemReducer from './item'

const rootReducer = combineReducers({
  items: itemReducer,
})

export default rootReducer
