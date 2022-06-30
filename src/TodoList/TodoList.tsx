import React from 'react';
import { Todo } from '../model';
import SingleTodo from '../SingleTodo/SingleTodo';
import './TodoList.css'

interface Props {
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList : React.FC<Props> = ({todos, setTodos}) => {

    return (
        <div className='todoList-container'>
            <h3 className='m-0'>Todo List</h3>
            {
                todos.length === 0 ? <small>Your todo list is empty</small> : <small>Todo : {todos?.length}</small>
            }
            {
                todos?.map( t => {
                    return <SingleTodo key={t.id} todo={t} todos={todos} setTodos={setTodos}></SingleTodo>
                })
            }
        </div>
    );
};

export default TodoList;