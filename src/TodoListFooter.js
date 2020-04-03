import React from 'react';
import './App.css';
import App from "./App";

class TodoListFooter extends React.Component {

    state = {
        isHidden: false
    }

    render = () => {


        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                <button onClick={ () => {this.props.changeFilter('All')}} className={classForAll}>All</button>
                <button onClick={ () => {this.props.changeFilter('Completed')}} className={classForCompleted}>Completed</button>
                <button onClick={ () => {this.props.changeFilter('Active')}} className={classForActive}>Active</button>
                {!this.state.isHidden && <span onClick={() => {alert('Hide')} }>Hide</span>}
                {this.state.isHidden && <span onClick={() => {alert('Show')} }>Show</span>}

            </div>

        );
    }
}

export default TodoListFooter;

