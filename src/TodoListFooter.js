import React from 'react';
import './App.css';
import App from "./App";
class TodoListFooter  extends React.Component {
    render = () => {
        return (
            <div className="todoList-footer">
                <button>All</button>
                <button>Completed</button>
                <button>Active</button>
            </div>

        );
    }
}

export default TodoListFooter ;