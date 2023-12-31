import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.css'
import store from './app/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
	document.getElementById('root')
)
