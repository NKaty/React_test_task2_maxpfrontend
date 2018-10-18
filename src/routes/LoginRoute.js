import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { authIdSelector } from '../selectors'

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/profile',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const mapStateToProps = (state, ownProps) => {
  return {
    isAuth: !!authIdSelector(state)
  }
}

export default connect(mapStateToProps)(PrivateRoute)
