import { RESET_ERROR_MESSAGE } from '../constants'
import { LOCATION_CHANGE } from 'react-router-redux'

export default (state = null, action) => {
  const { type, error } = action

  if (type === RESET_ERROR_MESSAGE || type === LOCATION_CHANGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}
