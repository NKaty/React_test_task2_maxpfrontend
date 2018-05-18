import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function MenuItem({ to, children }) {
  return (
    <div className='main-menu__item'>
      <NavLink className='main-menu__item__link' to = {to} activeStyle = {{ color: '#ee7c45' }}>{children}</NavLink>
    </div>
  )
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired
}

export default MenuItem
