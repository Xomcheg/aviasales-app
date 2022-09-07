/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunc from 'redux-thunk'

import reducer from './components/reducer'
import App from './components/app'
import './index.css'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

// function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       const result = next(action)
//       console.log('Middlewar', store.getState())
//       return result
//     }
//   }
// }
// const loggerMiddleware = (store) => (next) => (action) => {
//   const result = next(action)
//   console.log('Middlewar', store.getState())
//   return result
// }

// const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunc)))
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunc)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
