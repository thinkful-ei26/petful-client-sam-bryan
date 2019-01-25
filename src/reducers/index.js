import { combineReducers } from 'redux'
import dogReducer from './dogReducer'
import catReducer from './catReducer'

const rootReducer = combineReducers({
  dog: dogReducer, 
  cat: catReducer
})


export default rootReducer;