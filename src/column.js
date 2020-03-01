import React from 'react'
import usu from './Icons/user.png'

const Column = props => {
    let drawerClasses = 'columna'

    if(props.show){
        drawerClasses = 'columna open'
    }

    return (
    <aside class={drawerClasses}>
        <ul class="column-content">
            <a href="#"><img src={usu} alt="Imatge de Usuari" class="usuari"/></a>
            <span>Nom d'usuari</span>
            <li><a href="#">Els meus grups</a></li>
            <li><a href="#">Gestiona el compte</a></li>
            <li><a href="#">Log out</a></li>
        </ul>
    </aside>
    )
}

export default Column
