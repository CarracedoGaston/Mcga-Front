import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Questions from './components/screens/Questions'
import Statics from './components/screens/Statics'
import Logout from './components/screens/Logout'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        {localStorage.getItem('token')===null?
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Redirect from="/" to="/login" />
        </Switch>:
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Logout} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/statics" component={Statics} />
          <Redirect from="/" to="/home" />
        </Switch>}
      </BrowserRouter>
    )
  }
}

export default Routes