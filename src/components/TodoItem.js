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
        return (
            <div style ={{ backgroundColor :'#f4f4f4'}}>
                <p style = {custStyle}>{ this.props.todo.title+"  - " }
                <span style = {this.getStyle()}> Todo</span></p>
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
export default TodoItem
