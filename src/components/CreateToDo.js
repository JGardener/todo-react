import React, { Component } from 'react';

class CreateToDo extends Component  {

    state = {
        text: '',
        isList: false,
    };

    toggleIsList = () => {
        this.setState({
            isList: !this.state.isList,
        })
    };

    updateText = ({target: { value }}) => {
        this.setState({
            text: value,
        })
    };

    createNewToDo = (e) => {
        if (e.key === 'Enter') {
            const newToDo = {
                ...this.state,
            };

            this.props.createNewToDo(newToDo);

            this.setState({
                text: '',
                isList: false,
            })
        }
    };

    render() {
        return (
            <div className="create-new-toDo">
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.updateText}
                    onKeyPress={this.createNewToDo}
                    placeholder='Press "Enter" to add your new to-do.'
                />

                <input type="checkbox" checked={this.state.isList} onChange={this.toggleIsList}/>
            </div>
        );
    }
};

export default CreateToDo;