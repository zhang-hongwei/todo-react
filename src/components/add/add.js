import React, { Component } from 'react';
import './add.less'
export default class Add extends Component {
    handleClickAdd(){
        console.log(1)
    }
    render() {
        return (
            <div onClick={this.handleClickAdd.bind(this)} className ="add">
                <i className= "iconfont icon-jia1"></i>
            </div>
        )
    }
}