import React from 'react';
import TodoApp from './Todo/Todo';
import './App.css'

const App : React.FC = () => {
  return (
    <div className='full-body' style={{margin :0,padding:0}}>
        <TodoApp></TodoApp>
    </div>
  );
}

export default App;
