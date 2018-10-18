import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
  const { callAPI, type, ...rest } = action

  if (!callAPI) return next(action)

  const { endpoint, callbackSuccess, ...init } = callAPI

  next({ ...rest, type: type + START })

  // чтобы видеть Loading... во время загрузки
  setTimeout(() => {
    fetch(endpoint, {
      ...init
      // credentials: 'include'
    })
      .then(response => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
      })
      .then(response => {
        if (response.status === 'ok') {
          next({ ...rest, type: type + SUCCESS, response })
          if (callbackSuccess) callbackSuccess()
        } else {
          next({
            ...rest,
            type: type + FAIL,
            error: response.message || 'Something bad happened'
          })
        }
      })
      .catch(error =>
        next({
          ...rest,
          type: type + FAIL,
          error: error.message || 'Something bad happened'
        })
      )
  }, 500)
}
