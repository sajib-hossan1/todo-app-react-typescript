import React, { useState } from 'react';
import { Todo } from '../model';
import './TodoList.css'

interface Props {
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList : React.FC<Props> = ({todos, setTodos}) => {
    const [editTodo, seteditTodo] = useState<string>("");
    const [editMode, setEditMode] = useState<boolean>(false);

    const handleDone = (id:number) => {
        setTodos(todos.map(t => t.id === id ? {...t , isDone : !t.isDone} : t ));
    };

    const handleDelete = (id:number) => {
        setTodos(todos.filter(t => t.id !== id ));
    };

    const handleEdit = (t: Todo) => {
        if(!editMode && !t.isDone){
            setEditMode(!editMode)
        }
    }
    return (
        <div className='todoList-container'>
            <h1>Todo List</h1>
            {
                todos.map(t => {
                    return <div className='todos-container' key={t.id}>
                        <div className="t-container">
                            {
                                editMode ? <input type="text" /> : t.isDone ? <s>{t.todo}</s> : <span>{t.todo}</span>
                            }
                            <div className="icons">
                                <span onClick={() => handleEdit(t) }><i className="fa-solid fa-pen"></i></span>
                                <span onClick={() => handleDelete(t.id)}><i className="fa-solid fa-trash"></i></span>
                                <span onClick={() => handleDone(t.id)}><i className="fa-solid fa-check"></i></span>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default TodoList;