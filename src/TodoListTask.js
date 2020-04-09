import React from 'react';


class TodoListTask extends React.Component {
    onIsDoneChanged = (e) => {

        this.props.changeStatus(e.currentTarget.checked, this.props.task.id);
    }


    render = () => {

        const taskClassName = this.props.task.isDone ? 'todoList-task done' : 'todoList-task';

        return (

            <div className={taskClassName}>
                <input type="checkbox" checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                {false ? <input/>
                    : <span>{this.props.task.id} - {this.props.task.title}</span>

                        },
                            priority: {this.props.task.priority}
                < /div>
                    );
                }
                }

                export default TodoListTask;
