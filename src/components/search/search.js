import React, { Component } from 'react';
import './search.less'
export default class Search extends Component {


    componentDidMount(){
        console.log(this.props.todo[0].text)
    }

    handleSearch(e){
       const text = e.target.value.trim()
       this.props.todo.forEach(item=>{
           if (item.text.includes(text)){
               console.log(1)
           }else{
               console.log(2)
           }
       })
    }

    render() {
        return (
            <div className="search">
                <input onChange = {this.handleSearch.bind(this)} placeholder="Search" className= "s-input" type="text"/>
                <i className="iconfont icon-search"></i>  
            </div>
        )
    }
}