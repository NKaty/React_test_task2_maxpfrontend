import { LOGIN, RESET_ERROR_MESSAGE, LOAD_PROFILE, LOAD_ALL_NEWS, LOGOUT } from '../constants'
import history from '../history'

export function login (form, redirectTo) {
  return {
    type: LOGIN,
    callAPI: {
      callbackSuccess: function () {
        if (redirectTo) history.push(redirectTo) //на будущее, если закрытых routes будет несколько, и захотим редиректить к тому, с котороого user пытался зайти
        else history.push('/profile')
      },
      endpoint: 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }
  }
}

export function resetErrorMessage () {
  return {
    type: RESET_ERROR_MESSAGE
  }
}

export function loadProfile () {
  return (dispatch, getState) => {
    const loaded = getState().profile.loaded
    const loading = getState().profile.loading

    if (loading || loaded) return

    const id = getState().auth.id

    dispatch({
      type: LOAD_PROFILE,
      callAPI: {
        endpoint: `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`,
        method: 'GET'
      }
    })
  }
}

export function loadAllNews () {
  return (dispatch, getState) => {
    const loaded = getState().news.loaded
    const loading = getState().news.loading

    if (loading || loaded) return

    dispatch({
      type: LOAD_ALL_NEWS,
      callAPI: {
        endpoint: 'https://mysterious-reef-29460.herokuapp.com/api/v1/news',
        method: 'GET'
      }
    })
  }
}

export function logout () {
  return {
    type: LOGOUT,
    callAPI: {
      endpoint: 'https://mysterious-reef-29460.herokuapp.com/api/v1/logout', // на будущее
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
}
