import React from 'react';

export default function addTodo({addTodo}){

    let todoInput;

    return(
        <>
        <input ref={(node)=>{todoInput=node}}/>
        <button onClick={addTodo}>Add</button>
        </>
    )
}

