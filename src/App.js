import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import PrivateRoute from './routes/PrivateRoute'
import LoginRoute from './routes/LoginRoute'
import NewsList from './components/newsList/NewsList'
import Menu from './components/menu/Menu'
import NotFound from './components/notFound/NotFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Redirect from="/" to="/login" exact />
          <LoginRoute path="/login" component={Login} />
          <Route path="/news" component={NewsList} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
