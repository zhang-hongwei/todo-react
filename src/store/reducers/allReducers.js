import {
    combineReducers
} from 'redux'
import todos from './todo.js'

const allReducers = combineReducers({
    todos
})


export default allReducers