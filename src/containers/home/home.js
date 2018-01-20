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

componentDidMount(){
   console.log('====================================');
// console.log(this.sum())
   console.log('====================================');
}
  



    

handle(){
    console.log(112)
}

    render() {
        return (
            <div>
                <Header />
                <div className="tw">
                    <Counter counter = {this.props.todo} />
                    <Search />
                </div>
                <ul
                    className="items">
                    {this.props.todo.map((item, index) => (
                        <Item actions = {this.props.actions} key={index} text={item} />
                    ))}
                </ul>
                <div className="foot">
                    <Add />
                    <Input actions={this.props.actions} />
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(todoActions, dispatch)
})

export default connect(
    state => {
        return {
            todo: state.todos
        }
    }, mapDispatchToProps
)(Home)

