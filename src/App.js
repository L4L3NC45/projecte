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
import Register from './register';


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
            <h3 className="title" >Header</h3>       
          </div> 
        }}> 
        </Route>
        <Route exact path="/Reg" render={() => {
          return <div className="page-wrapper">
            <Register/>
          </div> 
        }}> 
        </Route>
        <Route exact path="/Help" render={() => {
          return <div className="page-wrapper">
        <h3>Ajuda</h3>
          </div> 
        }}> 
        </Route>
      </Router>
    <Footer/>
    </div>
  }
}

export default App;

