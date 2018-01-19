import React, { Component } from 'react';
import './counter.less'
export default class Counter extends Component {
    render() {
        return (
            <div className="counter">
              <span className="col sp1">29</span>
              <span className="col sp2">/</span>
              <span className="col sp3">100</span>
            </div>
        )
    }
}