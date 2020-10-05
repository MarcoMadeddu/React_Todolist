import React, {Component} from 'react';
import {createStore} from 'redux';
import './App.css';

//LET & VARS
let todos = [
  'call mama',
  'be proud',
  'have fun', 
];

//FUNCTIONS
function storeReducer(state = {}, action){
  switch(action.type){
    case 'ADD_TODO':
      return{
        todos : [
          action.payload,
          ...state.todos
        ]
      }
    case 'REMOVE_TODO':
      return{
        todos : [
         ...state.todos.slice(0,action.id),
         ...state.todos.slice(action.id + 1)
        ]
      }
      default:
        return {...state};
  }
};

const store = createStore(storeReducer, {todos: [...todos]});


class App extends Component{
  constructor(){
    super();
    this.state = {
      todos: [
      ],
    }

    //create ref for react, he is accessible from everywhere the param is optional and useless
    this.todoInput = React.createRef('input');
  }

  componentDidMount(){
    this.setState({todos:[...store.getState().todos]})
    store.subscribe(()=>{
      this.setState({todos:[...store.getState().todos]})
      console.log(store.getState())
    })
  }

  //Function to add todo on list
  addTodo = () => {
   const todo = this.todoInput.current.value;
   store.dispatch({
      type: 'ADD_TODO',
      payload: todo, // or write only todo
   });
  }

  removeTodo = (i) => {
    store.dispatch({
       type: 'REMOVE_TODO',
       id : i,
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>TODO LIST</h1>
        </header>

        <input ref={this.todoInput}/>
        <button onClick={this.addTodo}>Add</button>
        <ul>
           {
             //u can use this
          //  this.state.todos.map((todo, i) =><li key={i}>{todo} <button onClick={ ()=>{this.removeTodo(i)} }>Remove</button></li>)

          //or this
           this.state.todos.map((todo, i) =><li key={i}>{todo} <button onClick={ this.removeTodo.bind(null , i) }>Remove</button></li>)
           }
        </ul>
      </div>
    );
  }
}

export default App;
