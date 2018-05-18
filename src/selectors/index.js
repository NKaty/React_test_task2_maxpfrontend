import { createSelector } from 'reselect'

const allNewsSelector = (state) => state.news.entities
export const newsListSelector = createSelector(allNewsSelector, (news) => news.valueSeq().toJS())
export const newsLoadingSelector = (state) => state.news.loading
