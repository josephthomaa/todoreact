import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './layouts/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

import './App.css';

class App extends Component {
	state = {
		todos: [
      {
        id:uuid.v4(),
        title: 'learn react dom',
        completed:false
      },
      {
        id:uuid.v4(),
        title: 'learn react native',
        completed:false
      },
      {
        id:uuid.v4(),
        title: 'create .net backend',
        completed:false
      }
    ]
  };
  
  // mark us complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(
      todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      }
    ) });
  }

 // delete  todo
 delTodo = (id) => {
   this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)] });
 }

 //Add todo
 addTodo = (title) =>{
   const newTodo = {
     id:uuid.v4(),
     title: title,
     completed: false
   }
   this.setState({ todos: [...this.state.todos,newTodo]})
 }
render() {
    
		return (
		<Router>
				<div className='App'>
          <Header />
          <div className='container'>
              <Route exact path = "/" render={ props =>(
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
					        <Todos todos={this.state.todos}       markComplete = {this.markComplete} delTodo={ this.delTodo }/>
                </React.Fragment>
              )} />

              <Route path="/about" component={About} />
          </div>
          
				</div>
     </Router>    
		
		);
	}
}

export default App;