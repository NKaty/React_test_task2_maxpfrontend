import { combineReducers } from 'redux'
import auth from './auth'
import profile from './profile'
import news from './news'
import error from './error'

export default combineReducers({
  auth,
  error,
  profile,
  news
})
