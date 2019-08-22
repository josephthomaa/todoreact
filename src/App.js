import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './layouts/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Login from './components/pages/login'; 
//import uuid from 'uuid';
import axios from 'axios';

import './App.css';
import Register from './components/pages/Register';

class App extends Component {
	state = {
		todos: [
      
    ]
  };

  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({ todos: res.data }) )
  }
  
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
   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)] }));
 }

 //Add todo
 addTodo = (title) =>{
   axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false})
    .then(res =>this.setState({ todos: [...this.state.todos,res.data] }));
   
 }
render() {
    
		return (
		<Router>
				<div className='App'>
        
          <div className='container' style = {{ paddingTop:'50px' }}>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />

              <Route  path = "/home" render={ props =>(
                <React.Fragment>
                    <Header />
                  <AddTodo addTodo={this.addTodo} />
					        <Todos todos={this.state.todos}       markComplete = {this.markComplete} delTodo={ this.delTodo }/>
                </React.Fragment>
              )} />

              <Route path="/about" render ={ props =>(
                  <React.Fragment>
                    <Header />
                    <About />
                  </React.Fragment>
              )} />
              <Route path="/login" component={Login} />
          </div>
          
				</div>
     </Router>    
		
		);
	}
}

export default App;