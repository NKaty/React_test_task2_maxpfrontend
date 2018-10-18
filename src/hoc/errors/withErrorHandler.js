import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { resetErrorMessage } from '../../ac'
import errorsDictionary from './errorsDictionary'

import dismiss from './delete.png'
import './style.css'

const withErrorHandler = OriginComponent =>
  class GlobalError extends Component {
    static propTypes = {
      // from connect
      errorMessage: PropTypes.string,
      resetErrorMessage: PropTypes.func
    }

    componentWillUnmount(prevProps, prevState) {
      this.props.resetErrorMessage()
    }

    handleDismissClick = ev => {
      ev.preventDefault()
      this.props.resetErrorMessage()
    }

    get errorMessageBody() {
      const { errorMessage } = this.props
      return (
        <p className="error-message">
          <b className="error-message__text">
            {errorsDictionary[errorMessage] || errorMessage}
          </b>
          <button
            className="error-message__btn"
            onClick={this.handleDismissClick}
          >
            <img src={dismiss} alt="Dismiss" />
          </button>
        </p>
      )
    }

    render() {
      const { errorMessage, resetErrorMessage, ...rest } = this.props

      return (
        <Fragment>
          {errorMessage ? this.errorMessageBody : null}
          <OriginComponent {...rest} />
        </Fragment>
      )
    }
  }

const mapStateToProps = (state, ownProps) => {
  return {
    errorMessage: state.error
  }
}

export default compose(
  connect(
    mapStateToProps,
    { resetErrorMessage }
  ),
  withErrorHandler
)
