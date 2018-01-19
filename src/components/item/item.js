import React, { Component } from 'react';
import './item.less'
export default class extends Component {

   
    render() {
      
        return (

            <li className="item">
               <div className={this.props.text.completed? "endt end": "endf end" }>
                  {
                    this.props.text.completed ?<i className="iconfont icon-duihao"></i>:null
                  }
               </div>
                <div className={this.props.text.completed ? "info f in":"info in"}>
                    {this.props.text.text}
                </div>
                <div className="detail in">
                    <i className="iconfont ii icon-dingshinaozhong"></i>
                    <i className="iconfont ii icon-jiantou"></i>
                </div>
            </li>

        )
    }
}