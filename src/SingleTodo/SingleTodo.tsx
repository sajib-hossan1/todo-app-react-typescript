import React, { useState } from 'react';
import { Todo } from '../model';
import './SingleTodo.css'

interface Props {
    todo : Todo;
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos} : Props) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id:number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo , isDone : !todo.isDone} : todo ));
    };

    const handleDelete = (id:number) => {
        setTodos(todos.filter(t => t.id !== id ));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, todo : editTodo} : todo)
        );
        setEditMode(false);
    };
    

    return (
        <div className='todos-container'>
            <form >
                <div className="t-container">
                    {
                        editMode ? <input type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} /> : todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>
                    }
                    <div className="icons">
                        <span onClick={(e) => 
                            {
                                handleEdit(e, todo.id);
                                if (!editMode && !todo.isDone) {
                                setEditMode(!editMode);
                                };
                            }
                        }
                        >
                        <i className="fa-solid fa-pen"></i></span>
                        <span onClick={() => handleDelete(todo.id)}><i className="fa-solid fa-trash"></i></span>
                        <span onClick={() => handleDone(todo.id)}><i className="fa-solid fa-check"></i></span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SingleTodo;