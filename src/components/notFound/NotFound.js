import React from 'react'

import './style.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div>
        <p className="not-found-page__status">404</p>
        <p className="not-found-page__message">Page not found</p>
      </div>
    </div>
  )
}

export default NotFound
