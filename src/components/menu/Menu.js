import React from 'react'
import { connect } from 'react-redux'
import MenuItem from './MenuItem'
import MenuButton from './MenuButton'
import { logout } from '../../ac'
import { authIdSelector } from '../../selectors'

import './style.css'
import PropTypes from 'prop-types'

function Menu({ isAuth, logout }) {
  return (
    <div className="main-menu">
      {!isAuth && <MenuItem to="/login">Login</MenuItem>}
      <MenuItem to="/news">News</MenuItem>
      {isAuth && <MenuItem to="/profile">Profile</MenuItem>}
      <MenuButton isAuth={isAuth} logout={logout} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuth: !!authIdSelector(state)
  }
}

Menu.propTypes = {
  // from connect
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func
}

export default connect(
  mapStateToProps,
  { logout },
  null,
  { pure: false }
)(Menu)
