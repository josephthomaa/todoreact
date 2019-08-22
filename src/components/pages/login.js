import React from 'react';
import { Card, CardHeader, CardBody,
    Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'    

export default class Login extends React.Component {
    constructor() {  
        super();  
      
        this.state = {  
          Email: '',  
          Password: ''
        }  
      
         
        this.Email = this.Email.bind(this);  
        this.Password = this.Password.bind(this);  
        this.login = this.login.bind(this);  
      }
      
    Email(event) {  
        this.setState({ Email: event.target.value })  
    }  
    Password(event) {  
        this.setState({ Password: event.target.value })  
    }
    login(event) {  
        debugger;  
        fetch('http://127.0.0.1:8000/api/emailLogin', {  
            method: 'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                email: this.state.Email,  
                password: this.state.Password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.code == 400)  
                    alert('Invalid User');  
                else  
                    this.props.history.push("/home");  
            })  
    }     

  render() {
    return (
        <div style={custCard}>
        <Card >
        <CardHeader><h1 style={{ textAlign:'center'}}>Login </h1></CardHeader>
        
          <CardBody>
            <Form>
             
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email"  onChange={this.Email} name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password"  onChange={this.Password} name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                <Button onClick={this.login} style={btnCust}>Login</Button>
                <div style={linkStyle}> <Link  to="/register">Not Registered ? Register now !</Link></div>
              </Form>
          </CardBody>
        </Card>
      
     
      </div>
    );
  }
}

const custCard ={
    padding:'15px 200px',
}
const btnCust = {
    textAlign:'center',
    width:'100%'
}
const linkStyle = {
    color:'#f00',
    padding:'5px',
    textAlign:'center'
}