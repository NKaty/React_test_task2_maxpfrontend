import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../ac'
import Shield from '../common/Shield'

import './style.css'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  isValidForm = () => Object.keys(this.state).every(this.isValidField)

  isValidField = (type) => {
    switch (type) {
      case 'email':
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(this.state.email)

      case 'password':
        return this.state.password.length > 4

      default:
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const from = this.props.location.state ? this.props.location.state.from : null
    this.props.login(this.state, from)
    this.setState({
      password: ''
    })
  }

  getValidationMessage = (type, message) => {
    return <div className='login-form__message'>{this.isValidField(type) || !this.state[type].length ? '' : message}</div>
  }

  render () {
    return (
      <div className='login-form'>
        <form className='login-form__body' onSubmit={this.handleSubmit}>
          <h2 className='login-form__title'>Login</h2>
          {this.getValidationMessage('email', 'The email is incorrect.')}
          <p className='login-form__field'>
            <label htmlFor='email'>Email:</label>
            <input name='email' value={this.state.email} onChange={this.handleChange}/>
          </p>
          {this.getValidationMessage('password', 'The password must be at least 5 characters long.')}
          <p className='login-form__field'>
            <label htmlFor='password'>Password:</label>
            <input name='password' value={this.state.password} onChange={this.handleChange} type='password'/>
          </p>
          <input className='login-form__btn' type="submit" value="Login" disabled={!this.isValidForm()}/>
        </form>
        {this.props.loading && <Shield />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.auth.loading
  }
}

Login.propTypes = {
  // from connect
  loading: PropTypes.bool,
  login: PropTypes.func,
  // from history
  location: PropTypes.object
}

export default connect(mapStateToProps, { login })(Login)
