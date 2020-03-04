import React from 'react'
import { Form, Button, Alert } from 'react-bootstrap/';
import './register.css';

export const Register = () => {

    function alerta(){
        alert("hello")
    }

    return (
        <div className="log-reg-content">
            <div className="log">

                <Form>
                    <h3>Login</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Label>User name</Form.Label>
                    <Form.Control className="UserName" placeholder="User name" />
                    <Button className="summit" variant="primary" type="submit" onClick={alerta}>
                        Submit
                    </Button>
                </Form>

            </div>
        </div>
    )
}

export default Register;