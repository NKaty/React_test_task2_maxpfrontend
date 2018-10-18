import React, { Component } from 'react'
import Loader from '../common/Loader'
import News from '../news/News'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newsListSelector, newsLoadingSelector } from '../../selectors'
import { loadAllNews } from '../../ac/index'
import withErrorHandler from '../../hoc/errors/withErrorHandler'

import './style.css'

class NewsList extends Component {
  componentDidMount() {
    const { fetchData } = this.props
    if (fetchData) fetchData()
  }

  getAllNews() {
    const { allNews } = this.props
    return allNews.map(news => (
      <li className="news__item" key={news.id}>
        <News news={news} />
      </li>
    ))
  }

  render() {
    const { allNews, loading } = this.props
    if (loading) return <Loader />
    return (
      <div className="news">
        <h1 className="news__title">News</h1>
        <ul className="news__list">{this.getAllNews()}</ul>
        <p className="news__total">Всего новостей: {allNews.length}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allNews: newsListSelector(state),
    loading: newsLoadingSelector(state)
  }
}

NewsList.propTypes = {
  // from connect
  allNews: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchData: PropTypes.func
}

export default withErrorHandler(
  connect(
    mapStateToProps,
    { fetchData: loadAllNews }
  )(NewsList)
)
