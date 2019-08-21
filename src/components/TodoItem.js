import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            borderBottom : '1px #000000 dotted',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }

    render() {
        const { id,title } = this.props.todo;
        return (
            <div style ={{ backgroundColor :'#f4f4f4'}}>
                <p style = {custStyle}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                { title +"  - " }
                <span style = {this.getStyle()}> Todo</span>
                
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
  }

const custStyle = {
      fontSize :'16px',
      padding:'10px'
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    float: 'right'
}
export default TodoItem
