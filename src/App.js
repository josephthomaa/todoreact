import React, { Component } from 'react';

import Todos from './components/Todos';


import './App.css';

class App extends Component {
	state = {
		todos: [
      {
        id:1,
        title: 'learn react dom',
        completed:true
      },
      {
        id:2,
        title: 'learn react native',
        completed:false
      },
      {
        id:3,
        title: 'create .net backend',
        completed:false
      }
    ]
	};

render() {
    
		return (
		
				<div className='App'>
					<Todos todos={this.state.todos} />
				</div>
		
		);
	}
}

export default App;