import { START, SUCCESS, FAIL, LOAD_ALL_NEWS } from '../constants'
import { Record } from 'immutable'
import { arrToMap } from './utils'

const NewsRecord = Record({
  id: null,
  title: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], NewsRecord), //на будущее, если захотим искать новости по id
  loading: false,
  loaded: false
})

export default (newsState = new ReducerRecord(), action) => {
  const { type, response } = action
  switch (type) {
    case LOAD_ALL_NEWS + START:
      return newsState
        .set('loading', true)

    case LOAD_ALL_NEWS + SUCCESS:
      return newsState
        .set('entities', arrToMap(response.data, NewsRecord))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ALL_NEWS + FAIL:
      return newsState
        .set('loading', false)
        .set('loaded', false)

    default:
      return newsState
  }
}
