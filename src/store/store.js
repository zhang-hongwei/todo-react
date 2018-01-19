import {
    createStore,
    applyMiddleware
} from 'redux'
import logger from 'redux-logger'
import allReducers from './reducers/allReducers.js'


let store = createStore(allReducers, applyMiddleware(logger))
export default store