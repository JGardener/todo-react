import React from "react";
import ListItem from "../ListItem/ListItem";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: "",
      todos: [
        {
          title: "",
          completed: false
        }
      ]
    };
    this.formSubmitted = this.formSubmitted.bind(this);
    this.newToDoChanged = this.newToDoChanged.bind(this);
  }

  newToDoChanged(event) {
    this.setState({
      newToDo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newToDo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newToDo,
          done: false
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newToDo">New ToDo</label>
          <input
            onChange={this.newToDoChanged}
            type="text"
            value={this.state.newToDo}
          />
          <button type="submit">Add ToDo</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <ListItem key={todo.title} title={todo.title} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Form;
