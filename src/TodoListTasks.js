import React from 'react';
import './App.css';
import App from "./App";
import TodoListTask from "./TodoListTask";


class TodoListTasks extends React.Component {
    render = () => {
        let taskElements = this.props.tasks.map(task => {
            return <TodoListTask
                title={task.title}
                isDone={task.isDone}
                priority={task.priority}/>
        })

        return (
            <div className="todoList-tasks">
                {taskElements}

            </div>
        );
    }
}

export default TodoListTasks;