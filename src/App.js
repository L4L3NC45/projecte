import React from 'react';
import tasks from './sample/task.json';
import Tasks from './components/Tasks';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './header';
import Footer from './footer';
//import { Button } from '../node_modules/react-bootstrap';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';


class App extends React.Component{

  state = {
    tasks: tasks
  }

  render(){
    return <div>
    <Header/>
      <Router>
        <nav className="nav-bar">
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
        <Route exact path="/" render={() => {
          return <div className="page-wrapper">
            <Tasks tareas={this.state.tasks}/>  
            <Button variant="primary">Primary</Button>        
          </div> 
        }}> 
        </Route>
        <Route exact path="/Reg" render={() => {
          return <div className="page-wrapper"><p>Pagina de registro</p></div> 
        }}> 
        </Route>
      </Router>
    <Footer/>
    </div>
  }
}

export default App;

