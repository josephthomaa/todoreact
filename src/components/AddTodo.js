import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title:'' })
    }

    setTodo = (e) => this.setState({ [e.target.name]: e.target.value});


    render() {
        return (
           <form onSubmit={this.onSubmit} style ={{ display:'flex',padding: '20px' }}>
             <input type="text"
                    name="title"
                    placeholder="Add Todo ..."
                    style={{ flex: '10',padding:'5px' }}
                    value={this.state.title}
                    onChange={this.setTodo}
              />  
              <input type="submit"
                     value="submit"
                     className="btn"
                     style={{flex:'1'}}
                     
                     />   
           </form>
        )
    }
}

export default AddTodo
