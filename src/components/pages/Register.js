import React, { Component } from 'react';  
import { Button, Card, CardHeader, CardBody, CardGroup, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  
class Register extends Component {  
  
  constructor() {  
    super();  
  
    this.state = {  
      UserName: '',  
      City: '',  
      Email: '',  
      Password: '' 
    }  
  
     
    this.Email = this.Email.bind(this);  
    this.Password = this.Password.bind(this);  
    this.UserName = this.UserName.bind(this);  
    this.Password = this.Password.bind(this);  
    this.City = this.City.bind(this);  
    this.register = this.register.bind(this);  
  }  
  
  
  
  Email(event) {  
    this.setState({ Email: event.target.value })  
  }  
  
  Password(event) {  
    this.setState({ Password: event.target.value })  
  }  
  City(event) {  
    this.setState({ City: event.target.value })  
  }  
  UserName(event) {  
    this.setState({ UserName: event.target.value })  
  }  
  
  register(event) {  
  
    fetch('http://127.0.0.1:8000/api/emailRegistration', {  
      method: 'post',  
      headers: {  
        'Accept': 'application/json',  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
  
  
        UserName: this.state.UserName,  
        password: this.state.Password,  
        email: this.state.Email,  
        City: this.state.City 
      })  
    }).then((Response) => Response.json())  
      .then((Result) => {  
        if (Result.Status == 'Success')  
                this.props.history.push("/Home");  
        else  
          alert('Sorry !!!! Un-authenticated User !!!!!')  
      })  
  }  
  
  render() {  
  
    return (  
      <div className="app flex-row align-items-center">  
        <Container  style={custCard}>  
          
           
            <Card>
        <CardHeader><h1 style={{ textAlign:'center' }}>Sign Up </h1></CardHeader>
        
          <CardBody>
            <Form>
             
                <FormGroup>
                    <Label for="name">Username</Label>
                    <Input type="text"  onChange={this.UserName} placeholder="Enter User Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Email</Label>
                    <Input type="text"  onChange={this.Email} placeholder="Enter Email" />  
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Email</Label>
                    <Input type="password"  onChange={this.Password} placeholder="Enter Password" />   +
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Email</Label>
                    <Input type="text"  onChange={this.City} placeholder="Enter City" />  
                </FormGroup>
               
                <Button  onClick={this.register}  color="success" block>Create Account</Button> 
              </Form>
          </CardBody>
        </Card>  
             
        </Container>  
      </div>  
    );  
  }  
}  
const custCard ={
    padding:'15px 200px',
}  
export default Register;
