import React from 'react';
import tasks from './sample/task.json';
import Tasks from './components/Tasks';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './header';
import Footer from './footer';
//import { Button } from '../node_modules/react-bootstrap';
import { Button } from 'react-bootstrap/';
import Column from './column';
import Navv from './nav';


class App extends React.Component{

  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })

  }

  render(){
    return <div>
    <Header drawerClickHandler={this.drawerToggleClickHandler}/>
      <Router>
        <Navv />
        <Column show={this.state.sideDrawerOpen}/>
        <Route exact path="/" render={() => {
          return <div className="page-wrapper">  
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

