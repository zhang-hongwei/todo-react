import React, { Component } from 'react';
import './home.less'
import Header from '../../components/header/header'
import Counter from '../../components/counter/counter'
import Search from '../../components/search/search'
import Item from '../../components/item/item'
import Add from '../../components/add/add'
import Input from '../../components/input/input'

import { connect } from 'react-redux'

 class Home extends Component {
    constructor() {
        super()
        this.state = {
            ary: []
        }
    }

    componentDidMount(){
        console.log(this.props.todo)
    }

 

    render() {
        var ary = [123, 1, 3, 5, 6, 8]
        return (
            <div>
                <Header />
                <div className="tw">
                    <Counter />
                    <Search />
                </div>
                <ul
                className="items">
                    {this.props.todo.map((item, index) => (
                        <Item key={index} text={item} />
                    ))}
                </ul>
                <div className="foot">
                    <Add />
                    <Input/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => {
        return {
            todo:state.todos
        }
    }
)(Home)

