import { RESET_ERROR_MESSAGE } from '../constants'

export default (state = null, action) => {
  const { type, error } = action

  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}
