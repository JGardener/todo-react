import React from "react";

import List from "./components/List";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "To-Do List",
      subTitle: "Made in React JS",
    };
  }

  render() {
    return (
      <div className="App">
        <List
          title={this.state.title}
          subTitle={this.state.subTitle}
        />
      </div>
    );
  }
}

export default App;
