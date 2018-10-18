import React from 'react'
import PropTypes from 'prop-types'

export default function News({ news }) {
  return (
    <div>
      <h3>{news.title}</h3>
      <p>{news.text}</p>
    </div>
  )
}

News.propTypes = {
  news: PropTypes.object.isRequired
}
