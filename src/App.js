import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {

    state = {

        tasks: [
            {id: 1, title: "JS", isDone: false, priority: "low"},
            {id: 2, title: "CSS", isDone: true, priority: "high"},
            {id: 3, title: "React", isDone: false, priority: "low"},
            {id: 4, title: "SaSS", isDone: true, priority: "low"},
            {id: 5, title: "Redux", isDone: false, priority: "low"}

        ],
        filterValue: "All"
    };

    nextTaskId = 6; // новое свойство для id

    addTask = (newText) => {
        // let newTitle = this.newTaskTitleRef.current.value;
        // this.newTaskTitleRef.current.value = '';
        let newTask = {
            title: newText,
            isDone: false,
            priority: "low",
            id: this.nextTaskId
        };
        this.nextTaskId++; // увелчивае id таски на 1
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        })

    };

    changeStatus = (status, task) => {
       let tasksCopy = this.state.tasks.map(t => {
           if (t == task) {
               return {...t, isDone: status}
           }

           return t;
       });

        this.setState({
            tasks: tasksCopy
        })

    }

    changeFilter = (newfilterValue) => {
        this.setState({filterValue: newfilterValue});
    }
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    {/*<div className="todoList-header">*/}
                    {/*    <h3 className="todoList-header__title">What to Learn</h3>*/}
                    {/*    <div className="todoList-newTaskForm">*/}
                    {/*        <input*/}
                    {/*            ref={this.newTaskTitleRef}*/}
                    {/*            type="text"*/}
                    {/*            placeholder="New task name"/>*/}
                    {/*        <button onClick={this.onAddTaskClick}>Add</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter( (t) => {
                        switch (this.state.filterValue) {
                            case 'All': return true;
                            case 'Completed': return t.isDone;
                            case 'Active': return !t.isDone;
                            default: return true;
                        }


                    })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>


        );
    }
}

export default App;

