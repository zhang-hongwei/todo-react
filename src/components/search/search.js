import React, { Component } from 'react';
import './search.less'
export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <input placeholder="Search" className= "s-input" type="text"/>
                <i className="iconfont icon-search"></i>  
            </div>
        )
    }
}