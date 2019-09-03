import React, { Component } from 'react';
import MainNavigator from './src/public/navigators/MainNavigator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, fas } from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux'
import store from './src/redux/store'
library.add(fab, fas, faCheckSquare, faCoffee)
class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}

export default App;
