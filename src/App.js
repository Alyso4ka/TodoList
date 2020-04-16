import React from 'react';
import './App.css';
import TodoList from "./TodoList";




class App extends React.Component {

    state = {
        todolists: [{
            id: 1,
            title: 'What to learn'
        },
            {
                id: 2,
                title: 'Important'
            }]
    }

    render = () => {

        return (
            <div className="App">

                {this.state.todolists.map(tl =>  <TodoList id={tl.id} title={tl.title}/>)}

               


            </div>
        );
    }
}

export default App;

