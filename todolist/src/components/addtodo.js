import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';

function addTodoComponent({dispatch}){
    let todoInput;
    return(
        <>
        <input ref={(node)=>{todoInput=node}}/>
        <button onClick={
            () =>{
                dispatch(addTodo(todoInput.value));
                todoInput.value ='';
            }  
        }>Add</button>
        </>
    )
}
console.log(connect()(addTodoComponent));

export default connect()(addTodoComponent)

