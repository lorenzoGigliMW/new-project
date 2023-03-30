import './App.css';
//import {funzioni} from 'src/redux/componenti/todos'
import { tasksFetchCancel, tasksFetchEdit,tasksFetchToggle,tasksFetchAdd,tasksFetchSeeAll } from './redux/actions/todos';
import React, { Component } from "react";//useState, useRef, useEffect,
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import axios from 'axios'; 
import {useDispatch,useSelector} from 'react-redux';


const FILTER_MAP = {    //vari campi di Filtraggio e funzionalità
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);   //Array di filters name

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
      tasks: props.tasks
    }
    this.listHeadingRef = React.createRef();

  }

  setFilter(filter) {
    this.setState({ filter: filter })
  }
  setTasks(taskk) {
    this.setState({ tasks: taskk })
  }

  // export type RootState = ReturnType<typeof store.getState>
  // // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  // export type AppDispatch = typeof store.dispatch
//dispatch = useDispatch();
//selector= useSelector(state=>state.reducer)  //////////////////////////////////

    //EDITO UNA TASK
    editTask = (id, newName) => {
      axios.post('http://localhost:3005/api/todo/edit/' + id, { name: newName }, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },)
        .then((res) => {
          //this.setTasks({ name: res.newName })
          console.log(res.data)
          //funzioni.editTask(id,newName)
          this.dispatch(tasksFetchEdit(id,newName));
          //this.visualizzaTodo();
        }).catch((error) => {
          console.log(error)
        });
    }
  
    //AGGIUNGO UNA TASK
    addTask = (idAdd, nameAdd) => {
      axios.post('http://localhost:3005/api/todo/add', { id: idAdd, name: nameAdd }, {
      }, //{ id: idAdd, name: nameAdd }
      )
        .then(function (response) {
          //this.setTasks({id:response.id,name:response.name})
          console.log(response);
          this.dispatch(tasksFetchAdd(idAdd,nameAdd));
          //funzioni.addTask(idAdd,nameAdd)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    //SETTO COMPLETED A TRUE PER TUTTE LE TASK
    mostraTodo = () => {
      axios.post('http://localhost:3005/api/todos', {
      }, {})//
        .then(function (response) {
          //this.setTasks(response.data)
          console.log(response);
          this.dispatch(tasksFetchSeeAll());
        })
        .catch(function (error) {
          console.log(error);
        });
    }


    //ELIMINO UNA TASK
    deleteTask = (id) => {
      axios.delete('http://localhost:3005/api/todo/del/' + id, {}, {})
        .then(function (response) {
          console.log(response);
          this.dispatch(tasksFetchCancel(id));
        })
        .catch(function (error) {
          console.log(error);
        });
      // const remainingTasks = this.state.tasks.filter((task) => id !== task.id);
      // this.setTasks(remainingTasks);
    }
 
  //VISUALIZZA LISTA TASK DATO UN FILTRO
  taskList = () => {
    //debugger
    const tastksState = this.state.tasks;
    return tastksState.filter(FILTER_MAP[this.state.filter]).map((task) => (  //mappo solo quelli che rispecchiano il filtro
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={this.dispatch(tasksFetchToggle(task.id))}
        deleteTask={this.deleteTask}
        editTask={this.editTask}
      />
    ))
  };

  filterList = () => FILTER_NAMES.map((name) => (
    <FilterButton                         // invoco filterButton con i seguenti props
      key={name}
      name={name}
      //selezionato={this.state.filter}
      isPressed={name === this.state.filter}
      setFilter={() => this.setFilter(name)}
    />
  ))


  visualizzaTodo = () => {//filtro
    // contesto della funzione dentro
    axios.get('http://localhost:3005/api/todos')
      .then((response) => {

        this.setState({ tasks: response.data })
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };


  componentDidMount = () => {
    //visualizza task che non hanno un determinato id "eliminato"
    this.visualizzaTodo();
    this.props.visualizzaTutto();
  }

  // funzioneDentro.bind(this)();

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.tasks.length !== prevState.tasks.length) {        //
      this.listHeadingRef.current.focus();
    }
  }



  render = () => {
    
    const tasksNoun = this.taskList().length !== 1 ? 'tasks' : 'task';
    const headingText = `${this.taskList().length} ${tasksNoun} remaining`;

    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>   
         {this.addTask}
        <div className="filters btn-group stack-exception">
          {this.filterList()}
        </div>
        <h2 id="list-heading" tabIndex="-1" ref={this.listHeadingRef}>
          {headingText}
        </h2>
        <ul
         // role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"//
        >
          {this.taskList()}
        </ul>
        <h1>Mostra Todo</h1>
        <button type="submit" onClick={() => this.mostraTodo()}>Click to lista Todo</button>
      </div>
    );
  }
}

export default App;
