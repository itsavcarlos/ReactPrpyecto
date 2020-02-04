import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';

import tasks from './Ejemplo/tasks.json';

// Importar componentes
import Tasks from './component/Tasks';
import TaskForm from './component/TaskForm';
import Posts from './component/Posts';  

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, descripcion) => {
      // console.log(title, descripcion)
      const newTask = {
        title: title,
        descripcion: descripcion,
        id: this.state.tasks.length
      }
      // Agregar tarea a un nuevo estado
      this.setState({
        tasks: [...this.state.tasks, newTask]
      })
  }

  deleteTask = (id) => {
      const newTask = this.state.tasks.filter(task => task.id !== id)
      this.setState({tasks: newTask})
  }

  checkDone = (id) => {
      const newTasks = this.state.tasks.map(task => {
        if (task.id === id){
          task.done = !task.done
        }
        return task;
      });
      this.setState({tasks: newTasks})
  }


  render() {
    return <div>
            <Router>
                <Link to="/">home</Link>
                <br/>
                <Link to="/posts">Posts</Link>

                <Route exact path="/" render={() => {
                    return <div>
                       <TaskForm addTask={this.addTask}/>,
                       <Tasks tasks={this.state.tasks} 
                       deleteTask={this.deleteTask}
                       checkDone={this.checkDone}
                       />
                    </div>
                }}>
               </Route>
               <Route path="/posts" component={Posts} />
             </Router>
          </div>
  }
}

export default App;
