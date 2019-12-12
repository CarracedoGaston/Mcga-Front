import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from'./redux/store'
import Routes from './routes'
import PrivateRoutes from './PrivateRoutes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <PrivateRoutes/>
      </Provider>
    )
  }
}

export default App;
