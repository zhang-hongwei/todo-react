import * as types from '../action-types'

module.exports = {
    add: function () {
        return {
            type: types.ADD
        }
    },
    del: function () {
        return {
            type: types.DEL
        }
    }
}