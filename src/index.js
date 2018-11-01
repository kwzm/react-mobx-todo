import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'mobx-react'
import { registerObserver } from 'react-perf-devtool'
import Store from './store'
import App from './components/App'

registerObserver()

const store = new Store() 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root')
)