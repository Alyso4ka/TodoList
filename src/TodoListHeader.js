import React from 'react';
import './App.css';
import App from "./App";
class TodoListHeader extends React.Component {

    state = {
        error: false
    }

 newTaskTitleRef = React.createRef();


    onAddTaskButtonClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = '';
        this.props.addTask(newText);
    }

    render = () => {

        const inputClassName = this.state.error ? 'error' : "";



;
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onClick={this.setState} className={inputClassName} type="text" placeholder="New task name" ref={this.newTaskTitleRef}/>
                    <button onClick={this.onAddTaskButtonClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;