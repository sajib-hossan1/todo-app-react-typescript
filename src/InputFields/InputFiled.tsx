import React from 'react';
import './InputFiled.css'

interface Props {
    todo : string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handlerAdd : (e : React.FormEvent) => void;
}

const InputFiled : React.FC<Props> = ({todo, setTodo, handlerAdd}) => {
    return (
        <div className='input-container'>
            <form onSubmit={(e) => handlerAdd(e)}>
                <div className="mb-3">
                    <input type="input" value={todo} onChange={(e) => setTodo(e.target.value) } className="form-control" placeholder='Add Task'/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default InputFiled;