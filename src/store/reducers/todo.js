import * as types from '../action-types.js'

let initState = [{
        text: 'Use Redux',
        completed: false,
        id: 0,
        time: 0,
        child: {}
    }, 
   
]

export default function todos(state = initState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false,
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                time: 0,
                child: {}
            }];
        case types.DELETE_TODO:
            return state.filter(todo => {
                return todo.id !== action.id
            });
        case types.COMPLETE_TODO:
            return state.map(todo => (
                todo.id == action.id ? { ...todo,
                    completed: !todo.completed
                } : todo
            ))
        default:
            return state;
    }
}