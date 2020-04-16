import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoListTask from "./TodoListTask";


class TodoListTasks extends React.Component {


    render = () => {
        let taskElements = this.props.tasks.map(task => {
            return <TodoListTask
                task={task}
            changeStatus={this.props.changeStatus}
            changeTitle={this.props.changeTitle}
            />
        })

        return (
            <div className="todoList-tasks">
                {taskElements}

            </div>
        );
    }
}

export default TodoListTasks;