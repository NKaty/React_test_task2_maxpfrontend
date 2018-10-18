import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import api from '../middleware/api'
import thunk from 'redux-thunk'
import history from '../history'
import { routerMiddleware } from 'react-router-redux'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk, api, routerMiddleware(history))
)

const store = createStore(reducer, enhancer)

export default store
