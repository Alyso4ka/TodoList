import React from 'react';
import './App.css';
import TodoList from "./TodoList";

class TodoListHeader extends React.Component {

    state = {
        error: false,
        title: ''
    }


    onKeyPress = (e) => {
        if (e.key === "Enter")
            this.onAddTaskButtonClick();


    };

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value})
    };

    onAddTaskButtonClick = () => {
        let newText = this.state.title;
        this.state.title = '';
        if (newText !== "") {
            this.props.addTask(newText);
            this.setState({error: false});
        } else {
            this.setState({error: true});
        }
    }

    render = () => {

        const inputClassName = this.state.error ? 'error' : "";


        ;
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onKeyPress={this.onKeyPress}
                           onClick={this.setState}
                           className={inputClassName}
                           type="text"
                           placeholder="New task name"
                           value={this.state.title}
                           onChange={this.onTitleChanged}
                    />
                    <button onClick={this.onAddTaskButtonClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;