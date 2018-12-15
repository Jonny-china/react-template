import React from 'react'
import ReactDOM from 'react-dom'
import '@/assets/style/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import configureStore from '@/store/configureStore'

const store = configureStore()

// const supportsHistory = 'pushState' in window.history
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
