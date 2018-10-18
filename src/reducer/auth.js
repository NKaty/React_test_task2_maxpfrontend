import { LOGIN, START, SUCCESS, FAIL, LOGOUT } from '../constants'
import { Record } from 'immutable'

const UserRecord = Record({
  id: null,
  loading: false
})

export default (userState = new UserRecord(), action) => {
  const { type, response } = action
  switch (type) {
    case LOGIN + START:
      return new UserRecord().set('loading', true)

    case LOGIN + SUCCESS:
      return userState.set('id', response.data.id).set('loading', false)

    case LOGIN + FAIL:
      return new UserRecord()

    case LOGOUT:
      return new UserRecord()

    default:
      return userState
  }
}
