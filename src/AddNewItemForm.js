import React from 'react';

class AddNewItemForm extends React.Component {

    render = () => {
        return (
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
        );
    }
}

export default AddNewItemForm;

