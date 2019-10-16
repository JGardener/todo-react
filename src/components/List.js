import React from "react";
import ListItem from "../components/ListItem";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIsList: false
    };
  }
  appendNewToDo = e => {
    if (e.key === "Enter") {
      this.props.createNewToDo(e.target.value);
      e.target.value = "";
    }
    // Provisional attempt at creating a list within a list. Not working yet, but getting closer, I think.
    if (this.state.itemIsList === true) {
      return (
        <div className="list-container">
          <div className="title-container">
            <h1>Hey</h1>
          </div>
          <div className="create-new-toDo">
            <input
              type="text"
              onKeyPress={this.appendNewToDo}
              placeholder='Press "Enter" to add to-do.'
            />
            <span>Is this item a list?</span>
            <input
              type="checkbox"
              checked={this.state.itemIsList}
              onChange={this.toggleItemIsList}
            />
          </div>
          <ul className="toDo-list">
            {this.props.toDos.map(newToDo => (
              <ListItem
                key={newToDo}
                newToDo={newToDo}
                createNewToDo={this.props.createNewToDo}
                removeToDo={this.props.removeToDo}
              />
            ))}
          </ul>
        </div>
      );
    }
  };

  toggleItemIsList = e => {
    this.setState({
      itemIsList: e.target.checked
    });
    console.log(this.state.itemIsList);
  };

  render() {
    return (
      <div className="list-container">
        <div className="title-container">
          <h1>{this.props.title}</h1>
          <h6>{this.props.subTitle}</h6>
        </div>
        <div className="create-new-toDo">
          <input
            type="text"
            onKeyPress={this.appendNewToDo}
            placeholder='Press "Enter" to add to-do.'
          />
          <span>Is this item a list?</span>
          <input
            type="checkbox"
            checked={this.state.itemIsList}
            onChange={this.toggleItemIsList}
          />
        </div>
        <ul className="toDo-list">
          {this.props.toDos.map(newToDo => (
            <ListItem
              key={newToDo}
              newToDo={newToDo}
              createNewToDo={this.props.createNewToDo}
              removeToDo={this.props.removeToDo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
// == THE OLD WAY YOU DID IT. WE LEARNED SOMETHING TODAY BOYS!
// == Moved away from a functional component, to a class due to a requirement of handling lists within lists.
// const List = ({ title, subTitle, toDos, createNewToDo, removeToDo }) => {
//   const appendNewToDo = e => {
//     if (e.key === "Enter") {
//       createNewToDo(e.target.value);
//       e.target.value = "";
//     }
//   };

//   return (
//     <div className="list-container">
//       <div className="title-container">
//         <h1>{title}</h1>
//         <h6>{subTitle}</h6>
//       </div>
//       <div className="create-new-toDo">
//         <input
//           type="text"
//           onKeyPress={appendNewToDo}
//           placeholder='Press "Enter" to add your new to-do.'
//         />
//       </div>
//       <ul className="toDo-list">
//         {toDos.map(newToDo => (
//           <ListItem key={newToDo} newToDo={newToDo} removeToDo={removeToDo} />
//         ))}
//       </ul>
//     </div>
//   );
// };

export default List;
