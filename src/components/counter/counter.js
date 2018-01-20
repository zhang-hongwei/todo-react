import React, { Component } from 'react';
import './counter.less'
export default class Counter extends Component {

    sum() {
        let num = 0;
        this.props.counter.forEach(item => {
            if (item.completed == true) {
                num += 1
                console.log(num)
            }
        })
        return num
    }

    render() {
        return (
            <div className="counter">
              <span className="col sp1">{this.sum()}</span>
              <span className="col sp2">/</span>
              <span className="col sp3">{this.props.counter.length}</span>
            </div>
        )
    }
}