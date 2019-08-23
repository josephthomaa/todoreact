import React from 'react'

function About() {
    return (
        
        <React.Fragment>
            <h1>About</h1>
            <p>This is Todolist app v1.0.</p>
           
           {/* Calling welcome component and reusing it with diff msg's  */}
            <div>
                <Welcome name="react" />
                <Welcome name="redux" />
                <Welcome name="native" />
                <CustComponent message="This is a reusable component" />
                <StateExample />
            </div>
            
        </React.Fragment>
        
    )
}

//Components can refer to other components in their output. 

/*function Welcome(props) {
    return <h4>Learn, {props.name}</h4>;
}*/
  class Welcome extends React.Component {
      render(){
          return <h4>Learn , {this.props.name}</h4>
      }
  }
  class CustComponent extends React.Component {  
    render() {  
        return <p>Hello {this.props.message}!</p>;  
    }  
}
// using react state
class StateExample extends React.Component{
    constructor(){
        super();
        this.state = {
            newMsg : "This is a message from react state !"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }
    updateMessage() {
        this.setState({
            newMsg:"The message in the state is updated successfully .."
        });
    }
    render(){
        return <div>
            <p> {this.state.newMsg}</p>
            <button onClick={this.updateMessage}>Update</button>
        </div>
    }
}
  
export default About;
