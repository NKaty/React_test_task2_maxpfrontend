import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import auth from './auth'
import profile from './profile'
import news from './news'
import error from './error'

export default combineReducers({
  auth,
  error,
  profile,
  news,
  router
})
