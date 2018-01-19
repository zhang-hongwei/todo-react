import React, { Component } from 'react';
import './home.less';
import { bindActionCreators } from 'redux'
import Header from '../../components/header/header';
import Counter from '../../components/counter/counter';
import Search from '../../components/search/search';
import Item from '../../components/item/item';
import Add from '../../components/add/add';
import Input from '../../components/input/input';

import * as todoActions from '../../store/actions/home'

import { connect } from 'react-redux';

class Home extends Component {


  
handle(){
    console.log(112)
}

    render() {
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
                    <Input AddActions={this.props.AddActions} />
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    AddActions: bindActionCreators(todoActions, dispatch)
})

export default connect(
    state => {
        return {
            todo: state.todos
        }
    }, mapDispatchToProps
)(Home)

