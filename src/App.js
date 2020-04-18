import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";




class App extends React.Component {
    nextItemId = 0;


    state = {
        todolists: []
    }

    addTodolist = (title) => {
        let newItem = {
            title: title,

            id: this.nextItemId
        };
        this.nextItemId++;
    this.setState({
        todolists: [...this.state.todolists, newItem]
    }, () => {
        this.saveState();
    });
    }
    componentDidMount = () => {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state)

        localStorage.setItem('todolists', stateAsString)

    }

    restoreState = () => {
        let stateAsString = localStorage.getItem('todolists');
        if (stateAsString) {
            let state = JSON.parse(stateAsString);

            state.todolists.forEach(t => {
                if (t.id >= this.nextItemId) {
                    this.nextItemId = t.id +1;
                }
            })

            this.setState(state);
        }
    }


    render = () => {

        let todoLists = this.state.todolists.map(tl =>  <TodoList id={tl.id} title={tl.title}/>)

        return (
            <div>
            <div>
                <AddNewItemForm addItem={this.addTodolist}/>
            </div>

            <div className="App">
                {todoLists}
            </div>
            </div>
        );
    }
}

export default App;

