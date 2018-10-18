import React, { Component } from 'react'
import PropTypes from 'prop-types'
import history from '../../history'

class MenuButton extends Component {
  handleClick = ev => {
    ev.preventDefault()
    const { isAuth, logout } = this.props
    if (isAuth) logout()
    else history.push('/login')
  }

  render() {
    const { isAuth } = this.props
    return (
      <button className="main-menu__button" onClick={this.handleClick}>
        {!isAuth ? 'Log In' : 'Log Out'}
      </button>
    )
  }
}

MenuButton.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func
}

export default MenuButton
