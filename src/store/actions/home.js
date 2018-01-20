import * as types from '../action-types'


export const addTodo = (text) => ({type: types.ADD_TODO,text})
// 添加

export const completeTodo = (id) => ({type: types.COMPLETE_TODO,id})
// 完成

export const deleteTodo = (id) => ({type: types.DELETE_TODO,id})
// 删除