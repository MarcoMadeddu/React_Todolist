//Function to add todo on list
export const addTodo = (todo) => {
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