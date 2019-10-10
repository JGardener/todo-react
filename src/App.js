import React from "react";

import List from "./components/List";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "To-Do List",
      toDos: []
    };

    this.createNewToDo = this.createNewToDo.bind(this);

    this.removeToDo = this.removeToDo.bind(this);
  }

  createNewToDo = newToDo => {
    this.setState({
      toDos: [...this.state.toDos, newToDo]
    });
  };

  removeToDo = newToDo => {
    const toDos = [...this.state.toDos];
    const index = toDos.indexOf(newToDo);

    if (index > -1) {
      toDos.splice(index, 1);
      this.setState({
        toDos: toDos
      });
    }
  };

  render() {
    return (
      <div className="App">
        <List
          title={this.state.title}
          toDos={this.state.toDos}
          createNewToDo={this.createNewToDo}
          removeToDo={this.removeToDo}
        />
      </div>
    );
  }
}

export default App;
