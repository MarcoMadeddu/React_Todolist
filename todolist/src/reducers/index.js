export default function storeReducer(state = {}, action){
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