import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";

class TodoListTitle extends React.Component {


    render = () => {

        return (

            <h3 className="todoList-header__title">{this.props.title}</h3>

        );
    }
}

export default TodoListTitle;