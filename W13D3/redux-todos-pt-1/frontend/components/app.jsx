import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todos/todo_list_container';

const App = () => {
    return (
        <div>
            <TodoListContainer/>
            <h1>Todos</h1>
        </div>
        
    );
}

export default App;