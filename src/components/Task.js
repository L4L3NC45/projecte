import React, { Component } from 'react';

class Task extends Component{
    render(){
        return <div>
            {this.props.tarea.title} - 
            {this.props.tarea.description} - 
            {this.props.tarea.done} - 
            {this.props.tarea.id}
            <input type="checkbox"/>
            <button>X</button>
        </div>
    }

}

export default Task;