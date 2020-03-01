import React from 'react';
import tasks from './sample/task.json';
import Tasks from './components/Tasks';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './header';
import Footer from './footer';
import Button from 'react-bootstrap/Button';

class App extends React.Component{

  state = {
    tasks: tasks
  }

  render(){
    return <div>
    <Header/>
      <Router>
        <nav className="nav-bar">
          <Link id="home" to="/">Home</Link>
          <Link id="reg" to="Reg">Register</Link>
        </nav>
        <Route exact path="/" render={() => {
          return <div className="page-wrapper">
            <Tasks tareas={this.state.tasks}/><Button></Button>
            
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

