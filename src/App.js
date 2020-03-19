import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();


        setTimeout(() => {
            let newTask = {title: "JS", isDone: false, priority: "low"};
            let newTasks = [...this.state.tasks, newTask];
            this.setState({
                tasks: newTasks
            });
        }, 2000);

    }

    state = {

        tasks: [
            {title: "JS", isDone: false, priority: "low"},
            {title: "CSS", isDone: true, priority: "high"},
            {title: "React", isDone: false, priority: "low"},
            {title: "SaSS", isDone: true, priority: "low"},
            {title: "Redux", isDone: false, priority: "low"}

        ],
        filterValue: "Completed"
    };

    onAddTaskClick = () => {
        let newTitle = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = '';
        let newTask = {
            title: newTitle,
            isDone: false,
            priority: "low"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        })

    };
    render = () => {
        // let tasks = [
        //     {title: "JS", isDone: false, priority: "low"},
        //     {title: "CSS", isDone: true, priority: "low"},
        //     {title: "React", isDone: false, priority: "low"},
        //     {title: "SaSS", isDone: true, priority: "low"},
        //     {title: "Redux", isDone: false, priority: "low"}
        //
        // ]
        return (
            <div className="App">
                <div className="todoList">
                    {/*<TodoListHeader/>*/}
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input
                                ref={this.newTaskTitleRef}
                                type="text"
                                placeholder="New task name"/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>


        );
    }
}

export default App;

