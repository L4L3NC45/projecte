import React from 'react';
import './header.css'
import pip from '../Icons/pip';
import './columna.js'

class Header extends React.Component{
    render(){
        return <header>
        <div className="header-content">
            <h1>Gamer Tracer</h1>
            <button type="button" class="boton" id="1" onclick="hello()"><img src={pip} alt="Botó del panel" class="panel"/></button>
        </div>
    </header>
    }
}

export default Header
