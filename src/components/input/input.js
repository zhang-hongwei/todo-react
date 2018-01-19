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

    handle(e) {
        if (e.which === 13) {
            const text = e.target.value.trim()
           
            this.props.AddActions.addTodo(text)
            e.target.value = null
            this.setState({
                len: false
            })
           
        }
    }

    handleClick(e){
        this.props.AddActions.addTodo(e.target.value)
        e.target.value = null
        this.setState({
            len: false
        })
    }

    render() {
        return (
            <div className="input">
                <input onKeyDown={this.handle.bind(this)} onChange={this.change.bind(this)} placeholder="添加待办事项" className="inputtxt" type="text" />
                {this.state.len ? <i onClick={this.handleClick.bind(this)} className="iconfont in-jia icon-jia1"></i> : null}
            </div>
        )
    }
}