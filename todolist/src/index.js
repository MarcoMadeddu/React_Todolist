import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import storeReducer from './reducers/index';
import {Provider} from 'react-redux';
let storeTodos = {
  todos: [
    { id:0 , todo: 'Eat', completed: true},
    { id:1 , todo: 'Sleep', completed: false},
    { id:2 , todo: 'Code', completed: true},
    { id:3 , todo: 'Repeat', completed: false},
  ]
};
  
  
  
   const store = createStore(storeReducer, { todos: [...storeTodos.todos] },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

ReactDOM.render(
<Provider store ={store}>
  <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
