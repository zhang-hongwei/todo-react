 import App from './app/app';
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store/store'
window.st = store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)


