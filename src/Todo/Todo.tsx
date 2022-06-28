import React, { useState } from 'react';
import InputFiled from '../InputFields/InputFiled';
import { Todo } from '../model';
import TodoList from '../TodoList/TodoList';
import './Todo.css'

const TodoApp = () => {
    const [todo, setTodo] = useState<string>("");
    
    const [todos, setTodos] = useState<Todo[]>([]);

    const handlerAdd = (e : React.FormEvent) => {
        e.preventDefault();

        if(todo){
            setTodos([...todos,{id : Date.now(), todo, isDone : false}])
            setTodo("")
        }
    };
    console.log(todos);
    
    
    return (
        <div className='todo-container container'>
            <h2>Todo App</h2>
            <InputFiled todo={todo} setTodo={setTodo} handlerAdd={handlerAdd}></InputFiled>
            <TodoList todos={todos} setTodos={setTodos}></TodoList>
        </div>
    );
};

export default TodoApp;