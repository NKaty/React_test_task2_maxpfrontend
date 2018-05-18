import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { resetErrorMessage } from '../../ac'
import errorsDictionary from './errorsDictionary'

import dismiss from './delete.png'
import './style.css'

class GlobalError extends React.Component {
  handleDismissClick = ev => {
    this.props.resetErrorMessage()
    ev.preventDefault()
  }
  render() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }
    return (
      <p className='error-message'>
        <b>{errorsDictionary[errorMessage] || errorMessage}</b>
        {' '}
        <button className='error-message__btn' onClick={this.handleDismissClick}>
          <img src={dismiss} alt="Dismiss"/>
        </button>
      </p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    errorMessage: state.error
  }
}

GlobalError.propTypes = {
  // from connect
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func
}

export default connect(mapStateToProps, { resetErrorMessage })(GlobalError)



