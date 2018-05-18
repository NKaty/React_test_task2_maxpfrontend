import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../ac'
import history from '../../history'

class MenuButton extends Component {
  handleClick = () => {
    const { isAuth, logout } = this.props
    if (isAuth) {
      logout()
    } else {
      history.push('/login')
    }
  }

  render() {
    const { isAuth } = this.props
    return <button className='main-menu__button' onClick={this.handleClick}>{ !isAuth ? 'Log In' : 'Log Out'}</button>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuth: !!state.auth.id
  }
}

MenuButton.propTypes = {
  // from connect
  isAuth: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, { logout })(MenuButton)
