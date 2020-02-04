import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        descripcion: ''
    }

    onSubmit = (e) => {
        this.props.addTask(this.state.title, this.state.descripcion)
        e.preventDefault();
        
    }

    onChange = (e) => {
         console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <form onSubmit= {this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder="Escribe una tarea" 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br />
                <br />
                <textarea 
                    name ="descripcion"
                    placeholder="Escribe una descripcion" 
                    onChange={this.onChange} 
                    value={this.state.descripcion}>

                    </textarea>
                <input type="submit"/>
            </form>
        )
    }
}