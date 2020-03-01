import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

export class Navv extends Component {



    render() {


        return (
            <nav className='nav-bar'>
            <Navbar bg="dark" variant="dark">
            <Link className="Link" id="home" to="/"><Navbar.Brand id="navlog">Game</Navbar.Brand></Link>
              <Nav className="mr-auto">
                <Link className="Link" id="home" to="/">Home</Link>
                <Link className="Link" id="reg" to="/Reg">Register</Link>
                
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
          </nav>
        )
    }
}

export default Navv