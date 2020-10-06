import {connect} from 'react-redux';
import Todolist from '../components/todolist';

const mapStateToProps = (state) => {
    return{
        todos: [...state.todos]
    }
}

const myConnect = connect(mapStateToProps);
const myTodolist = myConnect(Todolist);

export default myTodolist;