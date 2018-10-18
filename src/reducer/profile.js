import { LOAD_PROFILE, START, SUCCESS, FAIL } from '../constants'
import { Record } from 'immutable'

const ProfileRecord = Record({
  city: null,
  languages: [],
  social: [],
  loading: false,
  loaded: false
})

export default (profileState = new ProfileRecord(), action) => {
  const { type, response } = action
  switch (type) {
    case LOAD_PROFILE + START:
      return new ProfileRecord().set('loading', true)

    case LOAD_PROFILE + SUCCESS:
      const social = [...response.data.social].sort((a, b) => {
        if (b.label === 'web') return 1
        else return -1
      })
      return profileState
        .set('city', response.data.city)
        .set('languages', response.data.languages)
        .set('social', social)
        .set('loading', false)
        .set('loaded', true)

    case LOAD_PROFILE + FAIL:
      return new ProfileRecord()

    default:
      return profileState
  }
}
