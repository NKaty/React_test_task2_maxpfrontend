import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './components/login/Login'
import GlobalError from './components/errors/GlobalError'
import Profile from './components/profile/Profile'
import PrivateRoute from './routes/PrivateRoute'
import NewsList from './components/newsList/NewsList'
import Menu from './components/menu/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <GlobalError />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/news" component={NewsList} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route render = {() => <h1>Not found page</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;