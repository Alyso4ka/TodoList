import React from 'react';
import './App.css';
import App from "./App";
import TodoListTask from "./TodoListTask";


class TodoListTasks extends React.Component {


    render = () => {
        let taskElements = this.props.tasks.map(task => {
            return <TodoListTask
                task={task}
            changeStatus={this.props.changeStatus}/>
        })

        return (
            <div className="todoList-tasks">
                {taskElements}

            </div>
        );
    }
}

export default TodoListTasks;