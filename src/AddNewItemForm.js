import React from 'react';

class AddNewItemForm extends React.Component {

    state = {
        error: false,
        title: ''
    }

    onKeyPress = (e) => {
        if (e.key === "Enter")
            this.onAddItemButtonClick();


    };

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value})
    };

    onAddItemButtonClick = () => {
        let newText = this.state.title;
        this.state.title = '';
        if (newText !== "") {
            this.props.addItem(newText);
            this.setState({error: false});
        } else {
            this.setState({error: true});
        }
    }


    render = () => {

        const inputClassName = this.state.error ? 'error' : "";

        return (
            <div className="newItemForm">
                <input onKeyPress={this.onKeyPress}
                       onClick={this.setState}
                       className={inputClassName}
                       type="text"
                       placeholder="New item name"
                       value={this.state.title}
                       onChange={this.onTitleChanged}
                />
                <button onClick={this.onAddItemButtonClick}>Add</button>
            </div>
        );
    }
}

export default AddNewItemForm;

