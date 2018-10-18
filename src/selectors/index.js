import { createSelector } from 'reselect'

export const authLoadingSelector = state => state.auth.loading
export const authIdSelector = state => state.auth.id

const allNewsSelector = state => state.news.entities
export const newsListSelector = createSelector(allNewsSelector, news =>
  news.valueSeq().toJS()
)
export const newsLoadingSelector = state => state.news.loading

export const profileCitySelector = state => state.profile.city
export const profileLanguagesSelector = state => state.profile.languages
export const profileSocialSelector = state => state.profile.social
export const profileLoadingSelector = state => state.profile.loading
