import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import AddNewTodo from './containers/addnew'
import MyTodoList from './containers/mytodolist';
import FooterLink from './components/filterlink';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
        <div className="container">
          <div className="search">
            <FooterLink actionType="ALL">
              <i>ALL</i>
            </FooterLink>
            <FooterLink actionType="TODO">
              <i>TODO</i>
            </FooterLink>
            <FooterLink actionType="COMPLETED">
              <i>COMPLETED</i>
            </FooterLink>


          </div>
          <div className="todolist">
            <AddNewTodo/>
            <MyTodoList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
