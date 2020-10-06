//Function to add todo on list
export const addTodo = (todo) => {
    const todo = this.todoInput.current.value;
    return{
       type: 'ADD_TODO',
       payload: todo, // or write only todo
    };
   }
 
export const removeTodo = (i) => {
     return{
        type: 'REMOVE_TODO',
        id : i,
     };
   }