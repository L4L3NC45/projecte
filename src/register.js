import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap/';
import './register.css';
import axios from 'axios'


class Register extends Component {
    constructor() {
        super();
        this.state = {
        }

    }
    
    showInputLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.emailLog,
                password: this.state.passwordLog,
              })
            }) .then(res => {
                return res;
            }) .catch(err => err)
        }

    showInputRegister = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailUser: this.state.email,
                passwordUser: this.state.password,
                repassword: this.state.repassword,
                nomUser: this.state.username
              })
            }) .then(res => {
                return res;
            }) .catch(err => err)
        }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
     }

     handlePassowrdChange = (e) => {
        this.setState({password: e.target.value});
     }

     handleEmailChangeLog = (e) => {
        this.setState({emailLog: e.target.value});
     }

     handlePassowrdChangeLog = (e) => {
        this.setState({passwordLog: e.target.value});
     }

     handleRePassowrdChange = (e) => {
        this.setState({repassword: e.target.value});
     }

     handleUserNameChange = (e) => {
        this.setState({username: e.target.value});
     }

    render(){
    return (
        <div className="log-reg-content">
            <div className="log">

                <Form onSubmit={this.showInputLogin}>
                    <h3>Login</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.emailLog} onChange={this.handleEmailChangeLog}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" value={this.state.passwordLog} onChange={this.handlePassowrdChangeLog}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check className="check" type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="regist">
                <Form>
                    <h3>Register</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleEmailChange} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handlePassowrdChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="repassword" value={this.state.repassword} onChange={this.handleRePassowrdChange}/>
                    </Form.Group>
                    <Form.Label>User name</Form.Label>
                    <Form.Control className="UserName" placeholder="User name" name="username" value={this.state.username} onChange={this.handleUserNameChange}/>
                    <Button className="summit" variant="primary" type="button" onClick={this.showInputRegister} >
                        Submit
                    </Button>
                </Form>

            </div>
        </div>
    )
}
}
export default Register;