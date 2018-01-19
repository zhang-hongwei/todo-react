import React, { Component } from 'react';
import './input.less'

export default class extends Component {
    constructor() {
        super()
        this.state = {
            len: false
        }
    }
    change(e) {
        if (e.target.value.length > 0) {
            this.setState({
                len: true
            })
        } else {
            this.setState({
                len: false
            })
        }
    }
    render() {
        return (
            <div className="input">
                <input onChange={this.change.bind(this)} placeholder="添加待办事项" className="inputtxt" type="text" />
                {this.state.len ? <i className="iconfont in-jia icon-jia1"></i> : null}
            </div>
        )
    }
}