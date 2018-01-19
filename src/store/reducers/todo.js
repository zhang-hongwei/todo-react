import * as types from '../action-types.js'

let initState = [{
    text: 'Use Redux',
    completed: true,
    id: 0,
    time: 0,
    child: {},
}, {
        text: 'Use Redux',
        completed: false,
        id: 0,
        time: 0,
        child: {},
    }, {
        text: 'Use Redux',
        completed: false,
        id: 0,
        time: 0,
        child: {},
    }, {
        text: 'Use Redux',
        completed: true,
        id: 0,
        time: 0,
        child: {},
    }, {
        text: 'Use Redux',
        completed: true,
        id: 0,
        time: 0,
        child: {},
    },  {
        text: 'Use Redux',
        completed: true,
        id: 0,
        time: 0,
        child: {},
    }, {
        text: 'Use Redux',
        completed: true,
        id: 0,
        time: 0,
        child: {},
    }, {
        text: 'Use Redux',
        completed: true,
        id: 0,
        time: 0,
        child: {},
    }, {
        text: 'Use Redux',
        completed: true,
        id: 0,
        time: 0,
        child: {},
    }, {
        text: 'Use Redux',
        completed: true,
        id: 0,
        time: 0,
        child: {},
    },{
    text: 'Use Redux',
    completed: true,
    id: 0,
    time: 0,
    child: {},
},{
    text: 'Use Redux',
    completed: true,
    id: 0,
    time: 0,
    child: {},
},{
    text: 'Use Redux',
    completed: true,
    id: 0,
    time: 0,
    child: {},
}, {
        text: 'Use Reduxzhang张红伟张红伟，张红伟张红伟，张红伟张红伟，张红伟张红伟',
        completed: true,
        id: 0,
        time: 0,
        child: {},
    }]

export default function todos(state = initState, action) {
    switch (action.type) {
        case types.ADD:
            return state;
        default:
            return state;
    }
}