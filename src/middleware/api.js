import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
  const { callAPI, type, ...rest } = action

  if (!callAPI) return next(action)

  const { endpoint, callbackSuccess, ...init } = callAPI

  next({ ...rest, type: type + START })

  setTimeout(() => { //чтобы видеть Loading... во время загрузки
    fetch(endpoint, {
      ...init
      // credentials: 'include',
    })
      .then(res => {
        if (res.status >= 400) throw new Error(res.statusText) // на случай ошибки в адресе запроса -> возвращается 404, которая вызывыет ошибку в парсинге json
        return res.json()
      })
      .then(response => {
        if (response.status === 'ok') {
          next({ ...rest, type: type + SUCCESS, response })
          if (callbackSuccess) callbackSuccess()
        } else {
          next({ ...rest, type: type + FAIL, error: response.message || 'Something bad happened' })
        }
      })
      .catch(error => next({ ...rest, type: type + FAIL, error: error.message || 'Something bad happened' }))
  }, 500)
}
