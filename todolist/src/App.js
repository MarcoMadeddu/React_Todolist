import React, {Component} from 'react';
import './App.css';
import TodoList from './components/todolist';
import Header from './components/header';
import Addtodo from './components/addtodo';




class App extends Component{
  constructor(){
    super();

  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Addtodo/>
        <TodoList todos = {[]}/>
      </div>
    );
  }
}

export default App;
