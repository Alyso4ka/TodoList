import React from 'react';


class TodoListTask extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    onIsDoneChanged = (e) => {
        this.props.changeStatus(e.currentTarget.checked, this.props.task.id);
    }

    onTitleChanged = (e) => {
        this.props.changeTitle(e.currentTarget.value, this.props.task.id);


    }



    render = () => {

        const taskClassName = this.props.task.isDone ? 'todoList-task done' : 'todoList-task';

        return (

            <div className={taskClassName}>
                <input type="checkbox" checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                {this.state.editMode
                    ? <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.task.title} onChange={this.onTitleChanged}/>// onBlur - когда фокус уходит deactivateEditMode, убираем инпут - возвращаем спан
                    : <span onClick={this.activateEditMode}>{this.props.task.id} - {this.props.task.title}</span>// если editMode тру, то показываем инпуты, если фолс то спаны (как и было)

                },
                priority: {this.props.task.priority}
                < /div>
                    );
                    }
                    }

                    export default TodoListTask;
